import { Dispatch, SetStateAction } from 'react';
import { MarketCoin, PortfolioCoin, PortfolioCoinBasic } from './coins';
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
    coinOptions: MarketCoin[],
    inputValue: string,
    setInputValue: any
  ) => void;
  removeCoinFromWatchList: (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => void;
  coinOptions: MarketCoin[];
  createCoinOptions: (MarketCoins: MarketCoin[]) => void;
  getWatchList: (marketCoins: MarketCoin[]) => void;
}
export interface PortfolioContextData {
  portfolioFormOpen: boolean;
  onClickOpenPortfolioForm: () => void;
  onClickClosePortfolioForm: () => void;
  portfolioName: string;
  updatePortfolioName: (newName: string) => void;
  portfolioCoins: PortfolioCoin[];
  addNewCoinToPortfolio: (
    newCoin: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => void;
  portfolioCoinOptions: MarketCoin[];
  createPortfolioCoinOptions: (marketCoins: MarketCoin[]) => void;
  deletePortfolioCoin: (coinSymbol: string, marketCoins: MarketCoin[]) => void;
}
