import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { MarketCoin } from "../../types/coins";
import { WatchListContextData } from "../../types/context";
import { getCoinSymbol } from "../../utils/helpers";
import {
  removeCoinFromCoinOptions,
  addCoinToCoinOptions,
  isValidatedValue,
  addCoinToLocalStorage,
  removeCoinFromLocalStorage,
  getDataFromLocalStorage,
  createOptionsFromWatchListData,
} from "../contextHelpers";

const watchListDefaultValues = {
  watchListFormOpen: false,
  onClickOpenForm: () => null,
  onClickCloseForm: () => null,
  watchList: [],
  watchListName: "",
  updateWatchListName: () => null,
  addNewCoinToWatchList: () => null,
  removeCoinFromWatchList: () => null,
  coinOptions: [],
  createCoinOptions: () => null,
  getWatchList: () => null,
};

export const WatchListContext = createContext<WatchListContextData>(
  watchListDefaultValues
);

export const useWatchList = () => {
  return useContext(WatchListContext);
};

interface Props {
  children: React.ReactNode;
}

export const WatchListProvider: React.FC<Props> = ({ children }) => {
  const [watchListFormOpen, setWatchListFormOpen] = useState<boolean>(false);
  const [watchList, setWatchList] = useState<MarketCoin[]>([]);
  const [watchListName, setWatchListName] = useState<string>("My Watchlist");
  const [coinOptions, setCoinOptions] = useState<MarketCoin[]>([]);

  const onClickOpenForm = () => {
    setWatchListFormOpen(true);
  };
  const onClickCloseForm = () => {
    setWatchListFormOpen(false);
  };

  const updateWatchListName = (newWatchListName: string) => {
    const oldWatchListName = watchListName;
    const existingData = getDataFromLocalStorage(oldWatchListName);
    // update watchListName in local storage
    localStorage.setItem("watchListName", newWatchListName);

    // add new watchListName to local storage with existing data from old name
    localStorage[newWatchListName] = JSON.stringify(existingData);

    // remove old watchListName key and its value in local storage
    localStorage.removeItem(oldWatchListName);

    setWatchListName(newWatchListName);
  };

  const addNewCoinToWatchList = (
    marketCoins: MarketCoin[],
    coinOptions: MarketCoin[],
    inputValue: string,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => {
    const coinSymbol = getCoinSymbol(inputValue);

    if (isValidatedValue(coinOptions, coinSymbol)) {
      removeCoinFromCoinOptions(coinSymbol, setCoinOptions);
      const newCoin = marketCoins.filter(
        (coin) => coin.symbol === coinSymbol
      )[0];
      addCoinToLocalStorage(watchListName, coinSymbol);
      setWatchList((prev) => [...prev, newCoin]);
    } else {
      alert("This coin is not supported currently. Please try again.");
    }
    setInputValue("");
  };

  const removeCoinFromWatchList = (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => {
    removeCoinFromLocalStorage(watchListName, coinSymbol);
    setWatchList((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
    addCoinToCoinOptions(marketCoins, setCoinOptions, coinSymbol);
  };

  const createCoinOptions = (marketCoins: MarketCoin[]) => {
    if (watchList.length > 0) {
      const options = createOptionsFromWatchListData(marketCoins, watchList);
      setCoinOptions(options);
    } else {
      setCoinOptions(marketCoins);
    }
  };

  const getWatchList = (marketCoins: MarketCoin[]) => {
    const data = getDataFromLocalStorage(watchListName);

    if (data && data.length > 0) {
      let dataFromLocalStorage: MarketCoin[] = [];

      for (let i = 0; i < data.length; i++) {
        marketCoins.forEach((coin) => {
          if (coin.symbol === data[i]) dataFromLocalStorage.push(coin);
        });
      }

      setWatchList(dataFromLocalStorage);
    }
  };
  return (
    <WatchListContext.Provider
      value={{
        watchListFormOpen,
        onClickOpenForm,
        onClickCloseForm,
        watchListName,
        updateWatchListName,
        watchList,
        addNewCoinToWatchList,
        removeCoinFromWatchList,
        coinOptions,
        createCoinOptions,
        getWatchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
