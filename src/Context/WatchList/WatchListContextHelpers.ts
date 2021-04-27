import { Dispatch, SetStateAction } from "react";
import { MarketCoin } from "../../types/coins";

export const handleAddNewCoinToWatchList = (
  marketCoins: MarketCoin[],
  inputValue: string,
  setCoinOptions: Dispatch<SetStateAction<string[]>>,
  setWatchList: Dispatch<SetStateAction<MarketCoin[]>>
) => {
  const coinSymbol = inputValue.split("(")[1].split(")")[0].toLowerCase();
  removeCoinFromCoinOptions(inputValue, setCoinOptions);
  const newCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol);
  setWatchList((prev) => [...prev, newCoin[0]]);
};

export const isValidatedValue = (coinOptions: string[], inputValue: string) => {
  const isInOptions = coinOptions.includes(inputValue);
  if (isInOptions) return true;

  return false;
};

export const removeCoinFromCoinOptions = (
  inputValue: string,
  setCoinOptions: Dispatch<SetStateAction<string[]>>
) => {
  setCoinOptions((prev) => {
    const coinNames = prev.filter((coin) => coin !== inputValue);
    return coinNames;
  });
};

export const addCoinToCoinOptions = (
  marketCoins: MarketCoin[],
  setCoinOptions: Dispatch<SetStateAction<string[]>>,
  coinSymbol: string
) => {
  const fullCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol)[0];
  const coinName = getCoinNameAndSymbol(fullCoin);
  setCoinOptions((prev) => [coinName, ...prev]);
};

export const getCoinNameAndSymbol = (coin: MarketCoin) => {
  return `${coin.name} (${coin.symbol.toUpperCase()})`;
};

export const getCoinNameAndSymbolArray = (marketCoins: MarketCoin[]) => {
  const options = marketCoins.map((coin: MarketCoin) => {
    return `${coin.name} (${coin.symbol.toUpperCase()})`;
  });

  return options;
};
