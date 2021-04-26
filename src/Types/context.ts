import { MarketCoin, NameCoin, Coin } from "./coins";

export interface MarketCoinsContextData {
  marketCoins: MarketCoin[];
  setMarketCoins: (coins: MarketCoin[]) => void;
  fetchMarketCoins: () => void;
  isLoading: boolean;
}
export interface WatchListContextData {
  watchList: MarketCoin[];
  updateWatchList: (tempCoins: Coin[], marketCoins: MarketCoin[]) => void;
  tempCoins: Coin[];
  addNewTempCoins: (coin: Coin) => void;
  removeCoinFromTempCoins: (coinSymbol: string) => void;
  coinOptions: MarketCoin[];
  updateCoinOptions: (coinSymbol: string) => void;
  createCoinOptions: (MarketCoins: MarketCoin[]) => void;
}
