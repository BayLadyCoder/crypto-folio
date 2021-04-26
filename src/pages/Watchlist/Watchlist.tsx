import {
  Container,
  HeaderWrapper,
  PageTitle,
  Button,
} from "../../styles/globalStyles";
import WatchListForm from "../../components/WatchListForm";
import { useWatchList } from "../../context/WatchListContext";

const Home = () => {
  const { watchList, watchListFormOpen, onClickOpenForm } = useWatchList();

  return (
    <Container>
      <HeaderWrapper>
        <PageTitle>Watchlist</PageTitle>
        {!watchListFormOpen && (
          <Button primary="true" onClick={onClickOpenForm}>
            +ADD COINS
          </Button>
        )}
      </HeaderWrapper>
      {watchListFormOpen ? (
        <WatchListForm />
      ) : (
        <div style={{ background: "#fff" }}>
          {watchList.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
