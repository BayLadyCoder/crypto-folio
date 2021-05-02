import { Dispatch, SetStateAction } from "react";
import { MarketCoin } from "../../types/coins";
import { getCoinSymbol } from "../../utils/helpers";

export const handleAddNewCoinToWatchList = (
  marketCoins: MarketCoin[],
  inputValue: string,
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>,
  setWatchList: Dispatch<SetStateAction<MarketCoin[]>>
) => {
  const coinSymbol = inputValue.split("(")[1].split(")")[0].toLowerCase();
  removeCoinFromCoinOptions(inputValue, setCoinOptions);
  const newCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol);
  setWatchList((prev) => [...prev, newCoin[0]]);
};

export const isValidatedValue = (
  coinOptions: MarketCoin[],
  inputValue: string
) => {
  const coinSymbol = getCoinSymbol(inputValue);
  const isInOptions = coinOptions.find((coin) => coin.symbol === coinSymbol);
  if (isInOptions) return true;

  return false;
};

export const removeCoinFromCoinOptions = (
  inputValue: string,
  setCoinOptions: Dispatch<SetStateAction<MarketCoin[]>>
) => {
  setCoinOptions((prev) => {
    const coinSymbol = getCoinSymbol(inputValue);
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
