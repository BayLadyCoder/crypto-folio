import { useEffect, useContext } from 'react';
import { MarketCoinsContext } from '../../context/MarketCoins/MarketCoinsContext';
import SearchBar from '../../components/SearchBar';
import { CryptoTable, CryptoTableName } from '../../components/CryptoTable';

import { Container, Loading, PageTitle } from '../../styles/globalStyles';
const Home = () => {
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    fetchMarketCoins();
  }, [fetchMarketCoins]);

  if (marketCoins.length === 0) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <PageTitle>Market</PageTitle>
      {/* <SearchBar /> */}
      <CryptoTableName tableName='Crypto Market Monitor' />
      <CryptoTable coins={marketCoins} />
    </Container>
  );
};

export default Home;
