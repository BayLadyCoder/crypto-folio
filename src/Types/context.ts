import { MarketCoin, NameCoin } from "./coins";

export interface MarketCoinsContextData {
  marketCoins: MarketCoin[];
  setMarketCoins: (coins: MarketCoin[]) => void;
  fetchMarketCoins: () => void;
  isLoading: boolean;
}
export interface NameCoinsContextData {
  nameCoins: NameCoin[];
  setNameCoins: (coins: NameCoin[]) => void;
  fetchNameCoins: () => void;
  isLoading: boolean;
}
