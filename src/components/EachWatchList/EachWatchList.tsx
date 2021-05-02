import React from "react";
import { MarketCoin } from "../../types/coins";
import { WatchListContainer } from "./EachWatchList.styled";
import { HeaderWrapper, Button, TableName } from "../../styles/globalStyles";
import WatchListForm from "../WatchListForm";
import { CryptoTable } from "../CryptoTable";

interface Props {
  coins: MarketCoin[];
  watchListFormOpen: boolean;
  onClickOpenForm: () => void;
  watchListName: string;
  updateWatchListName: (newName: string) => void;
}

const WatchList: React.FC<Props> = ({
  coins,
  watchListFormOpen,
  onClickOpenForm,
  watchListName,
  updateWatchListName,
}) => {
  return (
    <WatchListContainer>
      <HeaderWrapper>
        <TableName>{watchListName}</TableName>
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
    </WatchListContainer>
  );
};

export default WatchList;
