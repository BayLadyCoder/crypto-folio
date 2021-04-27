import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { MarketCoin } from "../../types/coins";
import { WatchListContextData } from "../../types/context";
import {
  addCoinToCoinOptions,
  isValidatedValue,
  handleAddNewCoinToWatchList,
} from "./WatchListContextHelpers";

const watchListDefaultValues = {
  watchListFormOpen: false,
  onClickOpenForm: () => null,
  onClickCloseForm: () => null,
  watchList: [],
  addNewCoinToWatchList: () => null,
  removeCoinFromWatchList: () => null,
  coinOptions: [],
  createCoinOptions: () => null,
  updateCoinOptions: () => null,
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
  const [coinOptions, setCoinOptions] = useState<MarketCoin[]>([]);

  const onClickOpenForm = () => {
    setWatchListFormOpen(true);
  };
  const onClickCloseForm = () => {
    setWatchListFormOpen(false);
  };

  const addNewCoinToWatchList = (
    marketCoins: MarketCoin[],
    allCoinOptions: string[],
    inputValue: string,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => {
    if (isValidatedValue(allCoinOptions, inputValue)) {
      handleAddNewCoinToWatchList(
        marketCoins,
        inputValue,
        setCoinOptions,
        setWatchList
      );
    } else {
      alert("This coin is not supported currently. Please try again.");
    }
    setInputValue("");
  };

  const removeCoinFromWatchList = (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => {
    setWatchList((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
    addCoinToCoinOptions(marketCoins, setCoinOptions, coinSymbol);
  };

  const createCoinOptions = (marketCoins: MarketCoin[]) => {
    setCoinOptions(marketCoins);
  };

  const updateCoinOptions = (
    watchListCoins: MarketCoin[],
    marketCoins: MarketCoin[]
  ) => {
    let restOfCoins: MarketCoin[] = [];

    for (let i = 0; i < marketCoins.length; i++) {
      if (!watchListCoins.includes(marketCoins[i]))
        restOfCoins.push(marketCoins[i]);
    }
    setCoinOptions(restOfCoins);
  };

  return (
    <WatchListContext.Provider
      value={{
        watchListFormOpen,
        onClickOpenForm,
        onClickCloseForm,
        watchList,
        addNewCoinToWatchList,
        removeCoinFromWatchList,
        coinOptions,
        createCoinOptions,
        updateCoinOptions,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
