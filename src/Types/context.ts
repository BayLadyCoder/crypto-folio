import { MarketCoin } from "./coins";
export interface MarketCoinsContextData {
  marketCoins: MarketCoin[];
  setMarketCoins: (coins: MarketCoin[]) => void;
  fetchMarketCoins: () => Promise<MarketCoin[]>;
  isLoading: boolean;
}
export interface WatchListContextData {
  watchListFormOpen: boolean;
  onClickOpenForm: () => void;
  onClickCloseForm: () => void;
  watchList: MarketCoin[];
  watchListName: string;
  updateWatchListName: (newName: string) => void;
  addNewCoinToWatchList: (
    marketCoins: MarketCoin[],
    coinOptions: string[],
    inputValue: string,
    setInputValue: any
  ) => void;
  removeCoinFromWatchList: (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => void;
  coinOptions: string[];
  createCoinOptions: (MarketCoins: MarketCoin[]) => void;
}
