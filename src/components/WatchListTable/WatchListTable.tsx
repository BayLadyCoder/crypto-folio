import React from "react";
import { MarketCoin } from "../../types/coins";
import { TableName } from "./WatchListTable.styled";
import { HeaderWrapper, Button } from "../../styles/globalStyles";
import WatchListForm from "../WatchListForm";
import { CryptoTable } from "../CryptoTable";

interface Props {
  coins: MarketCoin[];
  tableName: string;
  watchListFormOpen: boolean;
  onClickOpenForm: () => void;
  watchListName: string;
  updateWatchListName: (newName: string) => void;
}

const WatchList: React.FC<Props> = ({
  tableName,
  coins,
  watchListFormOpen,
  onClickOpenForm,
  watchListName,
  updateWatchListName,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <HeaderWrapper>
        <TableName>{tableName}</TableName>
        {!watchListFormOpen && (
          <Button onClick={onClickOpenForm}>+ADD COINS</Button>
        )}
      </HeaderWrapper>
      {watchListFormOpen && (
        <WatchListForm
          watchListName={watchListName}
          updateWatchListName={updateWatchListName}
        />
      )}

      {coins.length > 0 && !watchListFormOpen && <CryptoTable coins={coins} />}
    </div>
  );
};

export default WatchList;
