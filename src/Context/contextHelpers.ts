import { Dispatch, SetStateAction } from "react";
import { MarketCoin } from "../types/coins";
import { getCoinSymbol } from "../utils/helpers";

export const isValidatedValue = (
  coinOptions: MarketCoin[],
  coinSymbol: string
) => {
  const isInOptions = coinOptions.find((coin) => coin.symbol === coinSymbol);
  if (isInOptions) return true;

  return false;
};

export const removeCoinFromCoinOptions = (
  coinSymbol: string,
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>
) => {
  setCoinOptions((prev) => {
    const coinNames = prev.filter((coin) => coin.symbol !== coinSymbol);
    return coinNames;
  });
};

export const addCoinToCoinOptions = (
  marketCoins: MarketCoin[],
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>,
  coinSymbol: string
) => {
  const fullCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol)[0];
  setCoinOptions((prev) => [fullCoin, ...prev]);
};