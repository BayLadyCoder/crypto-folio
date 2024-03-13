import { AppContainer } from './App.styled';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/globalStyles';
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import Portfolio from './pages/Portfolio';
import { WatchListProvider } from './context/WatchList/WatchListContext';
import { PortfolioProvider } from './context/Portfolio/PortfolioContext';
import { MarketCoinsProvider } from './context/MarketCoins/MarketCoinsContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <MarketCoinsProvider>
        <WatchListProvider>
          <PortfolioProvider>
            <AppContainer>
              <GlobalStyle />
              <NavBar />
              <Switch>
                <Route path='/crypto-folio' exact component={Home} />
                <Route
                  path='/crypto-folio/watchlist'
                  exact
                  component={WatchList}
                />
                <Route
                  path='/crypto-folio/portfolio'
                  exact
                  component={Portfolio}
                />
              </Switch>
            </AppContainer>
          </PortfolioProvider>
        </WatchListProvider>
      </MarketCoinsProvider>
    </Router>
  );
};

export default App;
