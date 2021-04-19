import { AppContainer } from "./App.styled";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import getMarketCoinsContext from "./Context/createMarketCoinsContext";
import { MarketContext } from "./Context/context";

const App: React.FC = () => {
  const marketCoinsContextValues = getMarketCoinsContext();

  return (
    <MarketContext.Provider value={marketCoinsContextValues}>
      <AppContainer>
        <GlobalStyle />
        <NavBar />
        <Home />
      </AppContainer>
    </MarketContext.Provider>
  );
};

export default App;
