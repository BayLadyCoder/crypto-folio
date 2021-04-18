import { AppContainer } from "./App.styled";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/globalStyles";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <SearchBar />
    </AppContainer>
  );
};

export default App;
