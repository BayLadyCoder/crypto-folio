import { useState, useContext, createContext } from "react";
import { MarketCoin, Coin } from "../Types/coins";
import { WatchListContextData } from "../Types/context";

const watchListDefaultValues = {
  watchList: [],
  updateWatchList: () => null,
  tempCoins: [],
  addNewTempCoins: () => null,
  removeCoinFromTempCoins: () => null,
  coinOptions: [],
  updateCoinOptions: () => null,
  createCoinOptions: () => null,
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
    setWatchList(watchListCoins);
  };
  const createCoinOptions = (marketCoins: MarketCoin[]) => {
    setCoinOptions(marketCoins);
  };
  const updateCoinOptions = (coinSymbol: string) => {
    setCoinOptions((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
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
        removeCoinFromTempCoins,
        coinOptions,
        createCoinOptions,
        updateCoinOptions,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
