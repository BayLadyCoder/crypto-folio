import React, { useState } from "react";
import { MarketCoin } from "../../types/coins";
import { TableName, PortfolioContainer } from "./PortfolioTable.styled";
import { HeaderWrapper, Button } from "../../styles/globalStyles";
import PortfolioForm from "../PortfolioForm";
// import { CryptoTable } from "../CryptoTable";

interface Props {
  coins: MarketCoin[];
  portfolioFormOpen?: boolean;
  onClickOpenForm?: () => void;
  portfolioName?: string;
  updatePortfolioName?: (newName: string) => void;
}

const PortfolioTable: React.FC<Props> = ({
  coins,
  // portfolioFormOpen,
  // onClickOpenForm,
  // portfolioName,
  // updatePortfolioName,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState("My Portfolio");

  const onClickOpenForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };
  const onClickCloseForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  const updatePortfolioName = (newName: string) => {
    setPortfolioName(newName);
  };

  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{portfolioName}</TableName>
        {!isFormOpen && <Button onClick={onClickOpenForm}>+ADD COINS</Button>}
      </HeaderWrapper>
      {isFormOpen && (
        <PortfolioForm
          coins={coins}
          onCloseForm={onClickCloseForm}
          portfolioName={portfolioName}
          updatePortfolioName={updatePortfolioName}
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
