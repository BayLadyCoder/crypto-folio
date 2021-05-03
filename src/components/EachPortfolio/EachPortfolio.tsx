import { useState } from "react";
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
  const [formStep, setFormStep] = useState("start");
  const onClickEditPortfolio = () => {
    setFormStep("start");
    onClickOpenPortfolioForm();
  };
  const onClickAddCoins = () => {
    setFormStep("add-coin");
    onClickOpenPortfolioForm();
  };
  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{portfolioName}</TableName>
        {!portfolioFormOpen && portfolioCoins.length > 0 ? (
          <Button onClick={onClickEditPortfolio}>EDIT PORTFOLIO</Button>
        ) : (
          !portfolioFormOpen && (
            <Button onClick={onClickAddCoins}>+ADD COINS</Button>
          )
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
          portfolioCoins={portfolioCoins}
          formStep={formStep}
          setFormStep={setFormStep}
        />
      )}

      {portfolioCoins.length > 0 && !portfolioFormOpen && (
        <PortfolioTable coins={portfolioCoins} />
      )}
    </PortfolioContainer>
  );
};

export default EachPortfolio;
