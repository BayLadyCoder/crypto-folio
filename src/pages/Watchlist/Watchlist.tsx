import {
  Container,
  HeaderWrapper,
  PageTitle,
  Button,
} from "../../styles/globalStyles";
import WatchListForm from "../../components/WatchListForm";
import { useWatchList } from "../../context/WatchList/WatchListContext";
import CryptoTable from "../../components/CryptoTable";

const Home = () => {
  const { watchList, watchListFormOpen, onClickOpenForm } = useWatchList();

  return (
    <Container>
      <HeaderWrapper>
        <PageTitle>Your Watchlist</PageTitle>
        {!watchListFormOpen && (
          <Button primary="true" onClick={onClickOpenForm}>
            +ADD COINS
          </Button>
        )}
      </HeaderWrapper>
      {watchListFormOpen && <WatchListForm />}

      <CryptoTable coins={watchList} tableName="Watchlist 1" />
    </Container>
  );
};

export default Home;
