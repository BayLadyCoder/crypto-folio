import { useEffect, useContext } from "react";
import { MarketCoinsContext } from "../../context/MarketCoinsContext";
import SearchBar from "../../components/SearchBar";
import CryptoTable from "../../components/CryptoTable";

import { Container, Loading, PageTitle } from "../../styles/globalStyles";
const Home = () => {
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    fetchMarketCoins();
  }, [fetchMarketCoins]);

  if (marketCoins.length === 0) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <PageTitle>Market</PageTitle>
      <SearchBar />
      <CryptoTable coins={marketCoins} tableName="Crypto Market Monitor" />
    </Container>
  );
};

export default Home;
