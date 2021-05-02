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
  updatePortfolioCoins: (
    newCoin: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => void;
}

const EachPortfolio: React.FC<Props> = ({
  marketCoins,
  portfolioName,
  updatePortfolioName,
  portfolioCoins,
  updatePortfolioCoins,
  portfolioFormOpen,
  onClickOpenPortfolioForm,
  onClickClosePortfolioForm,
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
          updatePortfolioCoins={updatePortfolioCoins}
        />
      )}

      {portfolioCoins.length > 0 && !portfolioFormOpen && (
        <PortfolioTable coins={portfolioCoins} />
      )}
    </PortfolioContainer>
  );
};

export default EachPortfolio;
