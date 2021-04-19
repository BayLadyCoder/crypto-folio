import { useEffect, useState } from "react";
import axios from "axios";

import {
  Wrapper,
  HeaderText,
  Table,
  TableHeadRow,
  TableHeadData,
  TableBodyData,
  Ticker,
  CoinImg,
  CoinNameWrapper,
  Loading,
} from "./CryptoTable.styled";
import { MarketCoin } from "../../Types/coins";

const CryptoTable = () => {
  const [marketCoins, setMarketCoins] = useState<MarketCoin[]>([]);

  useEffect(() => {
    const fetchMarket = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setMarketCoins(res.data);
    };
    fetchMarket();
  }, []);

  if (marketCoins.length === 0) return <Loading>Loading...</Loading>;
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
            <TableHeadData align="right">Market Cap</TableHeadData>
            <TableHeadData align="right">Volume(24h)</TableHeadData>
          </TableHeadRow>
        </thead>
        <tbody>
          {marketCoins.map((coin, index) => (
            <tr key={coin.id}>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default CryptoTable;
