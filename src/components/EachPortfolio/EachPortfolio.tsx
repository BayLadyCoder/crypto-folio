import { MarketCoin } from "../../types/coins";
import { PortfolioContainer } from "./EachPortfolio.styled";
import { HeaderWrapper, Button, TableName } from "../../styles/globalStyles";
import PortfolioForm from "../PortfolioForm";
import { PortfolioCoinBasic, PortfolioCoin } from "../../types/coins";
import PortfolioTable from "../PortfolioTable";
interface Props {
  marketCoins: MarketCoin[];
  portfolioFormOpen: boolean;
  onClickOpenPortfolioForm: () => void;
  onClickClosePortfolioForm: () => void;
  portfolioName: string;
  updatePortfolioName: (newName: string) => void;
  portfolioCoins: PortfolioCoin[];
  addNewCoinToPortfolio: (
    newCoin: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => void;
  portfolioCoinOptions: MarketCoin[];
  createPortfolioCoinOptions: (marketCoins: MarketCoin[]) => void;
}

const EachPortfolio: React.FC<Props> = ({
  marketCoins,
  portfolioName,
  updatePortfolioName,
  portfolioCoins,
  addNewCoinToPortfolio,
  portfolioFormOpen,
  onClickOpenPortfolioForm,
  onClickClosePortfolioForm,
  portfolioCoinOptions,
  createPortfolioCoinOptions,
}) => {
  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{portfolioName}</TableName>
        {!portfolioFormOpen && (
          <Button onClick={onClickOpenPortfolioForm}>+ADD COINS</Button>
        )}
      </HeaderWrapper>
      {portfolioFormOpen && (
        <PortfolioForm
          marketCoins={marketCoins}
          onCloseForm={onClickClosePortfolioForm}
          portfolioName={portfolioName}
          updatePortfolioName={updatePortfolioName}
          addNewCoinToPortfolio={addNewCoinToPortfolio}
          portfolioCoinOptions={portfolioCoinOptions}
          createPortfolioCoinOptions={createPortfolioCoinOptions}
        />
      )}

      {portfolioCoins.length > 0 && !portfolioFormOpen && (
        <PortfolioTable coins={portfolioCoins} />
      )}
    </PortfolioContainer>
  );
};

export default EachPortfolio;
