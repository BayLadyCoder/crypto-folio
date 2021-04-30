import React, { useState } from "react";
import { MarketCoin } from "../../types/coins";
import { TableName, PortfolioContainer } from "./PortfolioTable.styled";
import { HeaderWrapper, Button } from "../../styles/globalStyles";
import PortfolioForm from "../PortfolioForm";
import { CryptoTable } from "../CryptoTable";

interface Props {
  coins: MarketCoin[];
  watchListFormOpen?: boolean;
  onClickOpenForm?: () => void;
  watchListName?: string;
  updateWatchListName?: (newName: string) => void;
}

const PortfolioTable: React.FC<Props> = ({
  coins,
  watchListFormOpen,
  // onClickOpenForm,
  watchListName,
  updateWatchListName,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onClickOpenForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };
  const onClickCloseForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{watchListName}</TableName>
        {!isFormOpen && <Button onClick={onClickOpenForm}>+ADD COINS</Button>}
      </HeaderWrapper>
      {isFormOpen && (
        <PortfolioForm coins={coins} onCloseForm={onClickCloseForm} />
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
