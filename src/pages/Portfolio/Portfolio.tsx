import { useContext, useEffect } from "react";
import { Container, PageTitle } from "../../styles/globalStyles";
import EachPortfolio from "../../components/EachPortfolio";
import { MarketCoinsContext } from "../../context/MarketCoins/MarketCoinsContext";
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
    addNewCoinToPortfolio,
    portfolioCoinOptions,
    createPortfolioCoinOptions,
  } = usePortfolio();
  return (
    <Container>
      <PageTitle>Portfolio</PageTitle>
      <EachPortfolio
        marketCoins={marketCoins}
        portfolioName={portfolioName}
        updatePortfolioName={updatePortfolioName}
        portfolioCoins={portfolioCoins}
        addNewCoinToPortfolio={addNewCoinToPortfolio}
        portfolioFormOpen={portfolioFormOpen}
        onClickOpenPortfolioForm={onClickOpenPortfolioForm}
        onClickClosePortfolioForm={onClickClosePortfolioForm}
        portfolioCoinOptions={portfolioCoinOptions}
        createPortfolioCoinOptions={createPortfolioCoinOptions}
      />
    </Container>
  );
};

export default Portfolio;
