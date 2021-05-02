import { useState, useContext, createContext } from "react";
import {
  MarketCoin,
  PortfolioCoin,
  PortfolioCoinBasic,
} from "../../types/coins";
import { PortfolioContextData } from "../../types/context";
import { getCoinSymbol } from "../../utils/helpers";
import {
  addCoinToCoinOptions,
  removeCoinFromCoinOptions,
  isValidatedValue,
} from "../contextHelpers";

const portfolioDefaultValues = {
  portfolioFormOpen: false,
  onClickOpenPortfolioForm: () => null,
  onClickClosePortfolioForm: () => null,
  portfolioName: "",
  updatePortfolioName: () => null,
  portfolioCoins: [],
  addNewCoinToPortfolio: () => null,
  portfolioCoinOptions: [],
  createPortfolioCoinOptions: () => null,
};

export const PortfolioContext = createContext<PortfolioContextData>(
  portfolioDefaultValues
);

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

interface Props {
  children: React.ReactNode;
}

export const PortfolioProvider: React.FC<Props> = ({ children }) => {
  const [portfolioFormOpen, setPortfolioFormOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState("My Portfolio");
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[]>([]);
  const [portfolioCoinOptions, setPortfolioCoinOptions] = useState<
    MarketCoin[]
  >([]);

  const onClickOpenPortfolioForm = () => {
    setPortfolioFormOpen(true);
  };
  const onClickClosePortfolioForm = () => {
    setPortfolioFormOpen(false);
  };

  const updatePortfolioName = (newName: string) => {
    setPortfolioName(newName);
  };

  const addNewCoinToPortfolio = (
    newCoin: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => {
    if (newCoin.name_with_symbol.length > 0) {
      const coinSymbol = getCoinSymbol(newCoin.name_with_symbol);
      if (isValidatedValue(portfolioCoinOptions, coinSymbol)) {
        let myCoin: PortfolioCoin;
        const { bought_price_per_coin, bought_quantity } = newCoin;
        for (let i = 0; i < marketCoins.length; i++) {
          if (marketCoins[i].symbol === coinSymbol) {
            const gainUSD =
              (marketCoins[i].current_price - bought_price_per_coin) *
              bought_quantity;
            const gainPercentage =
              ((marketCoins[i].current_price - bought_price_per_coin) /
                bought_price_per_coin) *
              100;
            const currentValue = marketCoins[i].current_price * bought_quantity;
            myCoin = {
              ...marketCoins[i],
              ...newCoin,
              total_gain_usd: gainUSD,
              total_gain_percentage: gainPercentage,
              current_value: currentValue,
            };
            setPortfolioCoins([...portfolioCoins, myCoin]);
            removeCoinFromCoinOptions(coinSymbol, setPortfolioCoinOptions);
            break;
          }
        }
      } else {
        alert("This coin is not available");
      }
    }
  };
  const createPortfolioCoinOptions = (marketCoins: MarketCoin[]) => {
    setPortfolioCoinOptions(marketCoins);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioFormOpen,
        onClickOpenPortfolioForm,
        onClickClosePortfolioForm,
        portfolioName,
        updatePortfolioName,
        portfolioCoins,
        addNewCoinToPortfolio,
        portfolioCoinOptions,
        createPortfolioCoinOptions,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
