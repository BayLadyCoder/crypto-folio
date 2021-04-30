import React from "react";
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
  onClickOpenForm,
  watchListName,
  updateWatchListName,
}) => {
  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{watchListName}</TableName>
        {!watchListFormOpen && (
          <Button onClick={onClickOpenForm}>+ADD COINS</Button>
        )}
      </HeaderWrapper>
      <PortfolioForm coins={coins} />

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
