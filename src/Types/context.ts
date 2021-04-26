import { MarketCoin, NameCoin, Coin } from "./coins";

export interface MarketCoinsContextData {
  marketCoins: MarketCoin[];
  setMarketCoins: (coins: MarketCoin[]) => void;
  fetchMarketCoins: () => void;
  isLoading: boolean;
}
export interface WatchListContextData {
  watchList: MarketCoin[];
  updateWatchList: (watchListCoins: MarketCoin[]) => void;
}
