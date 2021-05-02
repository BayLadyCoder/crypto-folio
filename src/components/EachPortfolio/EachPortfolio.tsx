import React, { useState } from "react";
import { MarketCoin } from "../../types/coins";
import { TableName, PortfolioContainer } from "./EachPortfolio.styled";
import { HeaderWrapper, Button } from "../../styles/globalStyles";
import PortfolioForm from "../PortfolioForm";
// import { CryptoTable } from "../CryptoTable";
import { PortfolioCoinBasic, PortfolioCoin } from "../../types/coins";
import { getCoinSymbol } from "../../utils/helpers";
interface Props {
  marketCoins: MarketCoin[];
  portfolioFormOpen?: boolean;
  onClickOpenForm?: () => void;
  portfolioName?: string;
  updatePortfolioName?: (newName: string) => void;
}

const PortfolioTable: React.FC<Props> = ({
  marketCoins,
  // portfolioFormOpen,
  // onClickOpenForm,
  // portfolioName,
  // updatePortfolioName,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState("My Portfolio");
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[]>([]);

  const onClickOpenForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };
  const onClickCloseForm = () => {
    setIsFormOpen(false);
  };

  const updatePortfolioName = (newName: string) => {
    setPortfolioName(newName);
  };
  const updatePortfolioCoins = (newCoin: PortfolioCoinBasic) => {
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
        myCoin = {
          ...marketCoins[i],
          ...newCoin,
          total_gain_usd: gainUSD,
          total_gain_percentage: gainPercentage,
        };
        setPortfolioCoins([...portfolioCoins, myCoin]);
        break;
      }
    }
  };

  console.log("portfolioCoins", portfolioCoins);

  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{portfolioName}</TableName>
        {!isFormOpen && <Button onClick={onClickOpenForm}>+ADD COINS</Button>}
      </HeaderWrapper>
      {isFormOpen && (
        <PortfolioForm
          coins={marketCoins}
          onCloseForm={onClickCloseForm}
          portfolioName={portfolioName}
          updatePortfolioName={updatePortfolioName}
          updatePortfolioCoins={updatePortfolioCoins}
        />
      )}

      {/* {watchListFormOpen && (
        <WatchListForm
          watchListName={watchListName}
          updateWatchListName={updateWatchListName}
        />
      )}

      {coins.length > 0 && !watchListFormOpen && <CryptoTable coins={coins} />} */}
    </PortfolioContainer>
  );
};

export default PortfolioTable;
