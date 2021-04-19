import { AppContainer } from "./App.styled";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import getMarketCoinsContext from "./Context/createMarketCoinsContext";
import getNameCoinsContext from "./Context/createNameCoinsContext";
import { MarketCoinsContext, NameCoinsContext } from "./Context/context";

const App: React.FC = () => {
  const marketCoinsContextValues = getMarketCoinsContext();
  const nameCoinsContextValues = getNameCoinsContext();

  return (
    <MarketCoinsContext.Provider value={marketCoinsContextValues}>
      <NameCoinsContext.Provider value={nameCoinsContextValues}>
        <AppContainer>
          <GlobalStyle />
          <NavBar />
          <Home />
        </AppContainer>
      </NameCoinsContext.Provider>
    </MarketCoinsContext.Provider>
  );
};

export default App;
