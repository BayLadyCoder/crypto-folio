import { MarketCoin } from "../types/coins";

export const getCoinNameAndSymbol = (coin: MarketCoin) => {
  return `${coin.name} (${coin.symbol.toUpperCase()})`;
};

export const getCoinNameAndSymbolArray = (marketCoins: MarketCoin[]) => {
  const options = marketCoins.map((coin: MarketCoin) => {
    return `${coin.name} (${coin.symbol.toUpperCase()})`;
  });

  return options;
};

const validateCoinNameWithSymbol = (coinNameWithSymbol: string) => {
  if (!coinNameWithSymbol.includes("(")) return false;
  if (!coinNameWithSymbol.includes(")")) return false;
  if (coinNameWithSymbol.length < 4) return false;

  return true;
};

export const getCoinSymbol = (coinNameWithSymbol: string) => {
  if (validateCoinNameWithSymbol(coinNameWithSymbol)) {
    return coinNameWithSymbol.split("(")[1].split(")")[0].toLowerCase();
  } else {
    return "Invalid coin";
  }
};
