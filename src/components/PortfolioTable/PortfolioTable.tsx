import React from "react";

import {
  Wrapper,
  Table,
  TableHeadRow,
  TableHeadData,
  TableBodyRow,
  TableBodyData,
  Ticker,
  CoinImg,
  CoinNameWrapper,
} from "../CryptoTable/CryptoTable.styled";
import { PortfolioCoin } from "../../types/coins";
interface Props {
  coins: PortfolioCoin[];
}

const PortfolioTable: React.FC<Props> = ({ coins }) => {
  return (
    <Wrapper>
      <Table cellSpacing="0" cellPadding="0">
        <thead>
          <TableHeadRow>
            <TableHeadData align="center">Rank</TableHeadData>
            <TableHeadData align="left">Name</TableHeadData>
            <TableHeadData align="right">Quantity</TableHeadData>
            <TableHeadData align="right">Price Paid (coin)</TableHeadData>
            <TableHeadData align="right">Cost Basis</TableHeadData>
            <TableHeadData align="right">Current Price (coin)</TableHeadData>
            <TableHeadData align="right">Current Value</TableHeadData>
            <TableHeadData align="right">24h %</TableHeadData>

            <TableHeadData align="right">Total Gain</TableHeadData>
          </TableHeadRow>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableBodyRow key={coin.id}>
              <TableBodyData align="center">
                {coin.market_cap_rank}
              </TableBodyData>
              <TableBodyData align="left">
                <CoinNameWrapper>
                  <CoinImg src={coin.image} alt={coin.name} />
                  {coin.name} <Ticker>{coin.symbol}</Ticker>
                </CoinNameWrapper>
              </TableBodyData>
              <TableBodyData align="right">
                {coin.bought_quantity.toLocaleString()}
              </TableBodyData>
              <TableBodyData align="right">
                $
                {coin.bought_price_per_coin < 0
                  ? coin.bought_price_per_coin.toFixed(6)
                  : coin.bought_price_per_coin.toLocaleString()}
              </TableBodyData>
              <TableBodyData align="right">
                ${coin.cost_basis.toLocaleString()}
              </TableBodyData>
              <TableBodyData align="right">
                ${coin.current_price.toLocaleString()}
              </TableBodyData>
              <TableBodyData align="right">
                ${coin.current_value.toLocaleString()}
              </TableBodyData>
              <TableBodyData
                align="right"
                change={
                  coin.price_change_percentage_24h > 0
                    ? "positive"
                    : coin.price_change_percentage_24h < 0
                    ? "negative"
                    : ""
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableBodyData>
              <TableBodyData
                align="right"
                change={
                  coin.total_gain_usd > 0
                    ? "positive"
                    : coin.total_gain_usd < 0
                    ? "negative"
                    : ""
                }
              >
                {coin.total_gain_usd < 0
                  ? `-$${coin.total_gain_usd.toLocaleString().substring(1)}`
                  : `$${coin.total_gain_usd.toLocaleString()}`}
              </TableBodyData>
            </TableBodyRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default PortfolioTable;
