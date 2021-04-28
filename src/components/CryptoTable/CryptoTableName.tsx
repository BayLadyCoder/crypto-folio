import React from "react";
import { TableName } from "./CryptoTableName.styled";
import { HeaderWrapper } from "../../styles/globalStyles";
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
