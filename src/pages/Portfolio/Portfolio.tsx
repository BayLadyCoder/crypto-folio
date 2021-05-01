import { useContext, useEffect } from "react";

import { Container, HeaderWrapper, PageTitle } from "../../styles/globalStyles";
import PortfolioTable from "../../components/PortfolioTable";
import PortfolioForm from "../../components/PortfolioForm";
import { MarketCoinsContext } from "../../context/MarketCoinsContext";

const Portfolio = () => {
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    fetchMarketCoins();
  }, [fetchMarketCoins]);
  return (
    <Container>
      <PageTitle>Portfolio</PageTitle>
      <PortfolioTable
        coins={marketCoins}
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
