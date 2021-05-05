import { Dispatch, SetStateAction } from "react";
import { MarketCoin } from "../types/coins";

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

export const addCoinToLocalStorage = (key: string, coinSymbol: string) => {
  if (localStorage.getItem(key) !== null) {
    let stored_data = JSON.parse(localStorage[key]);
    localStorage[key] = JSON.stringify([...stored_data, coinSymbol]);
  } else {
    localStorage[key] = JSON.stringify([coinSymbol]);
  }
};

export const removeCoinFromLocalStorage = (key: string, coinSymbol: string) => {
  if (localStorage.getItem(key) !== null) {
    let stored_data = JSON.parse(localStorage[key]);
    localStorage[key] = JSON.stringify(
      stored_data.filter((coin: string) => coin !== coinSymbol)
    );
  }
};
