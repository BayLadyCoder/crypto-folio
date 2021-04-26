import { useState } from "react";
import {
  Container,
  HeaderWrapper,
  PageTitle,
  Button,
} from "../../styles/globalStyles";
import WatchListForm from "../../components/WatchListForm";
import { useWatchList } from "../../context/WatchListContext";

const Home = () => {
  const [watchListFormOpen, setWatchListFormOpen] = useState(false);
  const onClickAddCoins = () => {
    setWatchListFormOpen(true);
  };

  const { watchList } = useWatchList();

  return (
    <Container>
      <HeaderWrapper>
        <PageTitle>Watchlist</PageTitle>
        <Button primary="true" onClick={onClickAddCoins}>
          +ADD COINS
        </Button>
      </HeaderWrapper>
      {watchListFormOpen ? (
        <WatchListForm closeForm={() => setWatchListFormOpen(false)} />
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
