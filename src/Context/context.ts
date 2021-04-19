import { createContext, useState } from "react";
import { MarketCoin } from "../Types/coins";

export interface marketCoinsContextData {
  marketCoins: MarketCoin[];
  setMarketCoins: (coins: MarketCoin[]) => void;
  fetchMarketCoins: () => void;
  isLoading: boolean;
}

const marketCoinsDefaultValues = {
  marketCoins: [],
  setMarketCoins: () => null,
  fetchMarketCoins: () => null,
  isLoading: true,
};

export const MarketContext = createContext<marketCoinsContextData>(
  marketCoinsDefaultValues
);
