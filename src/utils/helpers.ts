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

export const getCoinSymbol = (coinNameWithSymbol: string) => {
  return coinNameWithSymbol.split("(")[1].split(")")[0].toLowerCase();
};
