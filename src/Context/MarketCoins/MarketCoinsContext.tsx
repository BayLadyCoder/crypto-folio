import { useState, useCallback, createContext, useContext } from "react";
import { MarketCoin } from "../../types/coins";
import axios from "axios";
import { MarketCoinsContextData } from "../../types/context";

const marketCoinsDefaultValues = {
  marketCoins: [],
  setMarketCoins: () => null,
  fetchMarketCoins: () => {
    throw new Error("GithubContext not avaliable");
  },
  isLoading: true,
};
export const MarketCoinsContext = createContext<MarketCoinsContextData>(
  marketCoinsDefaultValues
);
export const useMarketCoins = () => {
  return useContext(MarketCoinsContext);
};

interface Props {
  children: React.ReactNode;
}

export const MarketCoinsProvider: React.FC<Props> = ({ children }) => {
  const [marketCoins, setMarketCoins] = useState<MarketCoin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchMarketCoins = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setMarketCoins(res.data);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [setMarketCoins]);

  return (
    <MarketCoinsContext.Provider
      value={{
        marketCoins,
        setMarketCoins,
        isLoading,
        fetchMarketCoins,
      }}
    >
      {children}
    </MarketCoinsContext.Provider>
  );
};
