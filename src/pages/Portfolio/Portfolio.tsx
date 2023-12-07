import { useContext, useEffect } from 'react';
import { Container, PageTitle } from '../../styles/globalStyles';
import EachPortfolio from '../../components/EachPortfolio';
import { MarketCoinsContext } from '../../context/MarketCoins/MarketCoinsContext';

const Portfolio = () => {
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    if (marketCoins.length === 0) {
      fetchMarketCoins();
    }
  }, []);

  return (
    <Container>
      <PageTitle>Portfolio</PageTitle>
      <EachPortfolio marketCoins={marketCoins} />
    </Container>
  );
};

export default Portfolio;
