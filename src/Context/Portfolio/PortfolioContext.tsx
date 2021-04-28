import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { MarketCoin } from "../../types/coins";
import { PortfolioContextData } from "../../types/context";

const portfolioDefaultValues = {
  // portfolioFormOpen: false,
  // onClickOpenForm: () => null,
  // onClickCloseForm: () => null,
  // portfolio: [],
  // portfolioName: "",
  // updatePortfolioName: () => null,
  // addNewCoinToPortfolio: () => null,
  // removeCoinFromPortfolio: () => null,
  // coinOptions: [],
  // createCoinOptions: () => null,
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
  const [portfolioFormOpen, setPortfolioFormOpen] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<MarketCoin[]>([]);
  const [portfolioName, setPortfolioName] = useState<string>("My Portfolio");
  const [coinOptions, setCoinOptions] = useState<string[]>([]);

  const onClickOpenForm = () => {
    setPortfolioFormOpen(true);
  };
  const onClickCloseForm = () => {
    setPortfolioFormOpen(false);
  };

  const updatePortfolioName = (newName: string) => {
    setPortfolioName(newName);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioFormOpen,
        onClickOpenForm,
        onClickCloseForm,
        portfolioName,
        updatePortfolioName,
        portfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
