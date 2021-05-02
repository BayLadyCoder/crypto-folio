import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import {
  MarketCoin,
  PortfolioCoin,
  PortfolioCoinBasic,
} from "../../types/coins";
import { PortfolioContextData } from "../../types/context";
import { getCoinSymbol } from "../../utils/helpers";

const portfolioDefaultValues = {
  portfolioFormOpen: false,
  onClickOpenPortfolioForm: () => null,
  onClickClosePortfolioForm: () => null,
  portfolioName: "",
  updatePortfolioName: () => null,
  portfolioCoins: [],
  updatePortfolioCoins: () => null,
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

  const onClickOpenPortfolioForm = () => {
    setPortfolioFormOpen(true);
  };
  const onClickClosePortfolioForm = () => {
    setPortfolioFormOpen(false);
  };

  const updatePortfolioName = (newName: string) => {
    setPortfolioName(newName);
  };

  const updatePortfolioCoins = (
    newCoin: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => {
    const coinSymbol = getCoinSymbol(newCoin.name_with_symbol);
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
        break;
      }
    }
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
        updatePortfolioCoins,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
