import { useEffect, useContext } from "react";
import { MarketCoinsContext } from "../../context/context";
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
  Loading,
} from "./CryptoTable.styled";
import { PageTitle } from "../../styles/globalStyles";

const CryptoTable = () => {
  const { marketCoins100, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    fetchMarketCoins();
  }, []);

  if (marketCoins100.length === 0) return <Loading>Loading...</Loading>;

  return (
    <Wrapper>
      <PageTitle>Crypto Market Monitor</PageTitle>
      <Table>
        <thead>
          <TableHeadRow>
            <TableHeadData align="center">Rank</TableHeadData>
            <TableHeadData align="left">Name</TableHeadData>
            <TableHeadData align="right">Price</TableHeadData>
            <TableHeadData align="right">24h %</TableHeadData>
            <TableHeadData align="right">Market Cap</TableHeadData>
            <TableHeadData align="right">Volume(24h)</TableHeadData>
          </TableHeadRow>
        </thead>
        <tbody>
          {marketCoins100.map((coin, index) => (
            <TableBodyRow key={coin.id}>
              <TableBodyData align="center">{index + 1}</TableBodyData>
              <TableBodyData align="left">
                <CoinNameWrapper>
                  <CoinImg src={coin.image} alt={coin.name} />
                  {coin.name} <Ticker>{coin.symbol}</Ticker>
                </CoinNameWrapper>
              </TableBodyData>
              <TableBodyData align="right">
                ${coin.current_price.toLocaleString()}
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
              <TableBodyData align="right">
                ${coin.market_cap.toLocaleString()}
              </TableBodyData>
              <TableBodyData align="right">
                ${coin.total_volume.toLocaleString()}
              </TableBodyData>
            </TableBodyRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default CryptoTable;