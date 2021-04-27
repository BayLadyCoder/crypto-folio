import { Dispatch, SetStateAction } from "react";
import { MarketCoin, Coin } from "../../types/coins";

export const handleAddNewCoinToWatchList = (
  marketCoins: MarketCoin[],
  inputValue: string,
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>,
  setWatchList: Dispatch<SetStateAction<MarketCoin[]>>
) => {
  const coinSymbol = inputValue.split("(")[1].split(")")[0].toLowerCase();
  removeCoinFromCoinOptions(coinSymbol, setCoinOptions);
  const newCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol);
  setWatchList((prev) => [...prev, newCoin[0]]);
};

export const isValidatedValue = (
  allCoinOptions: string[],
  inputValue: string
) => {
  const isInOptions = allCoinOptions.includes(inputValue);
  if (isInOptions) return true;

  return false;
};

export const removeCoinFromCoinOptions = (
  coinSymbol: string,
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>
) => {
  setCoinOptions((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
};

export const addCoinToCoinOptions = (
  marketCoins: MarketCoin[],
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>,
  coinSymbol: string
) => {
  const fullCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol);
  setCoinOptions((prev) => [fullCoin[0], ...prev]);
};
