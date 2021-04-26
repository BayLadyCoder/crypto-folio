import { useState, useContext, createContext } from "react";
import { MarketCoin, Coin } from "../types/coins";
import { WatchListContextData } from "../types/context";

const watchListDefaultValues = {
  watchList: [],
  updateWatchList: () => null,
  tempCoins: [],
  addNewTempCoins: () => null,
  updateTempCoins: () => null,
  removeCoinFromTempCoins: () => null,
  coinOptions: [],
  createCoinOptions: () => null,
  updateCoinOptions: () => null,
  removeCoinFromCoinOptions: () => null,
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
  const [watchList, setWatchList] = useState<MarketCoin[]>([]);
  const [tempCoins, setTempCoins] = useState<Coin[]>([]);
  const [coinOptions, setCoinOptions] = useState<MarketCoin[]>([]);

  const updateWatchList = (tempCoins: Coin[], marketCoins: MarketCoin[]) => {
    let watchListCoins: MarketCoin[] = [];
    for (let i = 0; i < tempCoins.length; i++) {
      marketCoins.forEach((marketCoin) => {
        if (tempCoins[i].symbol === marketCoin.symbol) {
          watchListCoins.push(marketCoin);
        }
      });
    }
    updateCoinOptions(watchListCoins, marketCoins);
    setWatchList(watchListCoins);
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

  const updateTempCoins = (marketCoins: MarketCoin[]) => {
    if (tempCoins.length !== watchList.length) {
      setTempCoins(
        watchList.map((coin) => ({
          symbol: coin.symbol,
          name: `${coin.name} (${coin.symbol.toUpperCase()})`,
        }))
      );
      updateCoinOptions(watchList, marketCoins);
    }
  };

  const addNewTempCoins = (coin: Coin) => {
    setTempCoins((prev) => [...prev, coin]);
  };

  const removeCoinFromTempCoins = (coinSymbol: string) => {
    setTempCoins((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        updateWatchList,
        tempCoins,
        addNewTempCoins,
        updateTempCoins,
        removeCoinFromTempCoins,
        coinOptions,
        createCoinOptions,
        updateCoinOptions,
        removeCoinFromCoinOptions,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
