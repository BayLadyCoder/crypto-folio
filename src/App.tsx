import logo from "./images/logo.png";
import { AppContainer, AppHeader, Logo, AppName } from "./App.styled";
import { Container } from "./styles/globalStyles";
const App: React.FC = () => {
  return (
    <AppContainer>
      <AppHeader>
        <Logo src={logo} alt="img" />
        <AppName>Crypto Folio</AppName>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
