import { useState, useContext, createContext } from "react";
import { MarketCoin } from "../Types/coins";
import { WatchListContextData } from "../Types/context";

const watchListDefaultValues = {
  watchList: [],
  updateWatchList: () => null,
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
  const [coinOptions, setCoinOptions] = useState<MarketCoin[]>([]);

  const updateWatchList = (newWatchList: MarketCoin[]) => {
    setWatchList([...watchList, ...newWatchList]);
  };
  const createCoinOptions = (marketCoins: MarketCoin[]) => {
    setCoinOptions(marketCoins);
  };
  const updateCoinOptions = (coinSymbol: string) => {
    setCoinOptions((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        updateWatchList,
        coinOptions,
        createCoinOptions,
        updateCoinOptions,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
