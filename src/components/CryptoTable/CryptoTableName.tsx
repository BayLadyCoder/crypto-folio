import React from "react";
import { MarketCoin } from "../../types/coins";
import { TableName } from "./CryptoTableName.styled";
import { Container, HeaderWrapper, Button } from "../../styles/globalStyles";
import WatchListForm from "../WatchListForm";
import { useWatchList } from "../../context/WatchList/WatchListContext";
import CryptoTable from "./CryptoTable";

interface Props {
  tableName: string;
}
const CryptoTableName: React.FC<Props> = ({ tableName }) => {
  return (
    <div style={{ width: "100%" }}>
      <HeaderWrapper>
        <TableName>{tableName}</TableName>
      </HeaderWrapper>
    </div>
  );
};

export default CryptoTableName;
