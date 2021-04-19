import { createContext } from "react";
import { MarketCoinsContextData, NameCoinsContextData } from "../Types/context";

// MarketCoins Context
const marketCoinsDefaultValues = {
  marketCoins: [],
  setMarketCoins: () => null,
  marketCoins100: [],
  setMarketCoins100: () => null,
  fetchMarketCoins: () => null,
  isLoading: true,
};

export const MarketCoinsContext = createContext<MarketCoinsContextData>(
  marketCoinsDefaultValues
);

// NameCoins Context
const nameCoinsDefaultValues = {
  nameCoins: [],
  setNameCoins: () => null,
  fetchNameCoins: () => null,
  isLoading: true,
};

export const NameCoinsContext = createContext<NameCoinsContextData>(
  nameCoinsDefaultValues
);
