import { useState } from "react";
import {
  Container,
  HeaderWrapper,
  PageTitle,
  Button,
} from "../../styles/globalStyles";
import { AddNewWatchListBtn } from "./Watchlist.styled";
import WatchListForm from "../../components/WatchListForm";

const Home = () => {
  const [watchListFormOpen, setWatchListFormOpen] = useState(false);
  const onClickAddCoins = () => {
    setWatchListFormOpen(true);
  };
  return (
    <Container>
      <HeaderWrapper>
        <PageTitle>Watchlist</PageTitle>
        <Button primary="true" onClick={onClickAddCoins}>
          +ADD COINS
        </Button>
      </HeaderWrapper>
      {watchListFormOpen && (
        <WatchListForm closeForm={() => setWatchListFormOpen(false)} />
      )}
    </Container>
  );
};

export default Home;
