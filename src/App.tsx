import { AppContainer } from "./App.styled";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
    </AppContainer>
  );
};

export default App;
