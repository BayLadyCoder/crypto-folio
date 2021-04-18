import { AppContainer } from "./App.styled";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <Home />
    </AppContainer>
  );
};

export default App;
