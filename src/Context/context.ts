import { createContext } from "react";
import { MarketCoinsContextData } from "../Types/context";

// MarketCoins Context
const marketCoinsDefaultValues = {
  marketCoins: [],
  setMarketCoins: () => null,
  fetchMarketCoins: () => null,
  isLoading: true,
};

export const MarketCoinsContext = createContext<MarketCoinsContextData>(
  marketCoinsDefaultValues
);
