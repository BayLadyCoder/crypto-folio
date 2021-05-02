import { useContext, useEffect } from "react";
import { Container, PageTitle } from "../../styles/globalStyles";
import EachPortfolio from "../../components/EachPortfolio";
import { MarketCoinsContext } from "../../context/MarketCoinsContext";
import { usePortfolio } from "../../context/Portfolio/PortfolioContext";

const Portfolio = () => {
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    if (marketCoins.length === 0) fetchMarketCoins();
  }, [fetchMarketCoins, marketCoins]);

  const {
    portfolioName,
    updatePortfolioName,
    portfolioFormOpen,
    onClickOpenPortfolioForm,
    onClickClosePortfolioForm,
    portfolioCoins,
    updatePortfolioCoins,
  } = usePortfolio();
  return (
    <Container>
      <PageTitle>Portfolio</PageTitle>
      <EachPortfolio
        marketCoins={marketCoins}
        portfolioName={portfolioName}
        updatePortfolioName={updatePortfolioName}
        portfolioCoins={portfolioCoins}
        updatePortfolioCoins={updatePortfolioCoins}
        portfolioFormOpen={portfolioFormOpen}
        onClickOpenPortfolioForm={onClickOpenPortfolioForm}
        onClickClosePortfolioForm={onClickClosePortfolioForm}
      />
    </Container>
  );
};

export default Portfolio;
