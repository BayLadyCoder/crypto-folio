import { useState, useContext, createContext } from "react";
import { MarketCoin, Coin } from "../types/coins";
import { WatchListContextData } from "../types/context";

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
  removeCoinFromCoinOptions: () => null,
  addCoinToCoinOptions: () => null,
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
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => {
    const newCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol);

    setWatchList((prev) => [...prev, newCoin[0]]);
  };

  const removeCoinFromWatchList = (coinSymbol: string) => {
    setWatchList((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
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

  const removeCoinFromCoinOptions = (coinSymbol: string) => {
    setCoinOptions((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
  };
  const addCoinToCoinOptions = (coin: MarketCoin) => {
    setCoinOptions((prev) => [coin, ...prev]);
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
        removeCoinFromCoinOptions,
        addCoinToCoinOptions,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
