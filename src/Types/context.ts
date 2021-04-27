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
    marketCoins: MarketCoin[],
    allCoinOptions: string[],
    inputValue: string,
    setInputValue: any
  ) => void;
  removeCoinFromWatchList: (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => void;
  coinOptions: MarketCoin[];
  createCoinOptions: (MarketCoins: MarketCoin[]) => void;
  updateCoinOptions: (
    watchListCoins: MarketCoin[],
    MarketCoins: MarketCoin[]
  ) => void;
}
