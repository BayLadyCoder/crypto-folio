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
          <tr>
            <TableBodyData align="center">1</TableBodyData>
            <TableBodyData align="left">
              Bitcoin <Ticker>BTC</Ticker>
            </TableBodyData>
            <TableBodyData align="right">$56,264.34</TableBodyData>
            <TableBodyData align="right" change="negative">
              8.24%
            </TableBodyData>
            <TableBodyData align="right" change="positive">
              5.70%
            </TableBodyData>
            <TableBodyData align="right">$1,053,172,721,287</TableBodyData>
            <TableBodyData align="right">$96,726,217,062</TableBodyData>
          </tr>
          <tr>
            <TableBodyData align="center">2</TableBodyData>
            <TableBodyData align="left">
              Ethereum <Ticker>ETH</Ticker>
            </TableBodyData>
            <TableBodyData align="right">$2,231.64</TableBodyData>
            <TableBodyData align="right">7.45%</TableBodyData>
            <TableBodyData align="right">3.30%</TableBodyData>
            <TableBodyData align="right">$256,695,582,061</TableBodyData>
            <TableBodyData align="right">$50,180,275,291</TableBodyData>
          </tr>
          <tr>
            <TableBodyData align="center">3</TableBodyData>
            <TableBodyData align="left">
              Binance Coin <Ticker>BNB</Ticker>
            </TableBodyData>
            <TableBodyData align="right">$479.48</TableBodyData>
            <TableBodyData align="right">9.52%</TableBodyData>
            <TableBodyData align="right">5.64%</TableBodyData>
            <TableBodyData align="right">$73,126,507,918</TableBodyData>
            <TableBodyData align="right">$6,642,778,743</TableBodyData>
          </tr>
          <tr>
            <TableBodyData align="center">4</TableBodyData>
            <TableBodyData align="left">
              Dogecoin <Ticker>DOGE</Ticker>
            </TableBodyData>
            <TableBodyData align="right">$0.3314</TableBodyData>
            <TableBodyData align="right">10.74%</TableBodyData>
            <TableBodyData align="right">349.77%</TableBodyData>
            <TableBodyData align="right">$44,244,672,599</TableBodyData>
            <TableBodyData align="right">$23,697,578,154</TableBodyData>
          </tr>
          <tr>
            <TableBodyData align="center">5</TableBodyData>
            <TableBodyData align="left">
              Cardano <Ticker>ADA</Ticker>
            </TableBodyData>
            <TableBodyData align="right">$1.28</TableBodyData>
            <TableBodyData align="right">9.20%</TableBodyData>
            <TableBodyData align="right">0.26%</TableBodyData>
            <TableBodyData align="right">$40,827,058,113</TableBodyData>
            <TableBodyData align="right">$7,355,321,368</TableBodyData>
          </tr>
          <tr>
            <TableBodyData align="center">6</TableBodyData>
            <TableBodyData align="left">
              DigiByte <Ticker>DGB</Ticker>
            </TableBodyData>
            <TableBodyData align="right">$0.1356</TableBodyData>
            <TableBodyData align="right">13.02%</TableBodyData>
            <TableBodyData align="right">5.70%</TableBodyData>
            <TableBodyData align="right">$1,928,949,365</TableBodyData>
            <TableBodyData align="right">$363,465,402</TableBodyData>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default CryptoTable;
