import SearchBar from "../../components/SearchBar";
import CryptoTable from "../../components/CryptoTable";
import { Container } from "../../styles/globalStyles";
const Home = () => {
  return (
    <Container>
      <SearchBar />
      <CryptoTable />
    </Container>
  );
};

export default Home;
