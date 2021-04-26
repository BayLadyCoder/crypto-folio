import { useState, useContext, createContext } from "react";
import { MarketCoin } from "../Types/coins";
import { WatchListContextData } from "../Types/context";

const watchListDefaultValues = {
  watchList: [],
  updateWatchList: () => null,
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

  const updateWatchList = (newWatchList: MarketCoin[]) => {
    setWatchList([...watchList, ...newWatchList]);
  };

  return (
    <WatchListContext.Provider value={{ watchList, updateWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};
