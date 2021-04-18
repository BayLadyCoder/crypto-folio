import React from "react";
import {
  Wrapper,
  HeaderText,
  Table,
  TableHeadRow,
  TableHeadData,
  TableBodyData,
  Ticker,
} from "./CryptoTable.styled";

import { coins } from "./data";

const CryptoTable = () => {
  return (
    <Wrapper>
      <HeaderText>Now Trending</HeaderText>
      <Table>
        <thead>
          <TableHeadRow>
            <TableHeadData align="center">Rank</TableHeadData>
            <TableHeadData align="left">Name</TableHeadData>
            <TableHeadData align="right">Price</TableHeadData>
            <TableHeadData align="right">24h %</TableHeadData>
            <TableHeadData align="right">7d %</TableHeadData>
            <TableHeadData align="right">Market Cap</TableHeadData>
            <TableHeadData align="right">Volume(24h)</TableHeadData>
          </TableHeadRow>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <TableBodyData align="center">{coin.rank}</TableBodyData>
              <TableBodyData align="left">
                {coin.name} <Ticker>{coin.ticker}</Ticker>
              </TableBodyData>
              <TableBodyData align="right">${coin.price}</TableBodyData>
              <TableBodyData align="right" change="negative">
                {coin.change24h}%
              </TableBodyData>
              <TableBodyData align="right" change="positive">
                {coin.change7d}%
              </TableBodyData>
              <TableBodyData align="right">${coin.market_cap}</TableBodyData>
              <TableBodyData align="right">${coin.volume24}</TableBodyData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default CryptoTable;
