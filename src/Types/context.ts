import { MarketCoin, Coin } from "./coins";

export interface MarketCoinsContextData {
  marketCoins: MarketCoin[];
  setMarketCoins: (coins: MarketCoin[]) => void;
  fetchMarketCoins: () => void;
  isLoading: boolean;
}
export interface WatchListContextData {
  watchListFormOpen: boolean;
  onClickOpenForm: () => void;
  onClickCloseForm: () => void;
  watchList: MarketCoin[];
  addNewCoinToWatchList: (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => void;
  removeCoinFromWatchList: (coinSymbol: string) => void;
  coinOptions: MarketCoin[];
  createCoinOptions: (MarketCoins: MarketCoin[]) => void;
  updateCoinOptions: (
    watchListCoins: MarketCoin[],
    MarketCoins: MarketCoin[]
  ) => void;
  removeCoinFromCoinOptions: (coinSymbol: string) => void;
}
