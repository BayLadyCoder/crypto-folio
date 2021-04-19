import { AppContainer } from "./App.styled";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Portfolio from "./pages/Portfolio";
import getMarketCoinsContext from "./context/createMarketCoinsContext";
// import getNameCoinsContext from "./Context/createNameCoinsContext";
import { MarketCoinsContext, NameCoinsContext } from "./context/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App: React.FC = () => {
  const marketCoinsContextValues = getMarketCoinsContext();
  // const nameCoinsContextValues = getNameCoinsContext();

  return (
    <Router>
      <MarketCoinsContext.Provider value={marketCoinsContextValues}>
        {/* <NameCoinsContext.Provider value={nameCoinsContextValues}> */}
        <AppContainer>
          <GlobalStyle />
          <NavBar />
          <Switch>
            <Route path="/crypto-folio" exact component={Home} />
            <Route path="/watchlist" exact component={Watchlist} />
            <Route path="/portfolio" exact component={Portfolio} />
          </Switch>
        </AppContainer>
        {/* </NameCoinsContext.Provider> */}
      </MarketCoinsContext.Provider>
    </Router>
  );
};

export default App;
