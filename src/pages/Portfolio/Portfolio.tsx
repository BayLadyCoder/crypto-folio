import { useContext, useEffect } from "react";
import { Container, PageTitle } from "../../styles/globalStyles";
import PortfolioTable from "../../components/EachPortfolio";
import { MarketCoinsContext } from "../../context/MarketCoinsContext";

const Portfolio = () => {
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    if (marketCoins.length === 0) fetchMarketCoins();
  }, [fetchMarketCoins]);
  return (
    <Container>
      <PageTitle>Portfolio</PageTitle>
      <PortfolioTable
        marketCoins={marketCoins}
        // watchListFormOpen={watchListFormOpen}
        // onClickOpenForm={onClickOpenForm}
        portfolioName="My Portfolio"
        // updateWatchListName={updateWatchListName}
      />
      {/* <PortfolioForm marketCoins={marketCoins} /> */}
    </Container>
  );
};

export default Portfolio;
