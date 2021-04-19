import { Container, HeaderWrapper, PageTitle } from "../../styles/globalStyles";
import { AddNewWatchListBtn } from "./Watchlist.styled";
import WatchListForm from "../../components/WatchListForm";

const Home = () => {
  return (
    <Container>
      <HeaderWrapper>
        <PageTitle>Watchlist</PageTitle>
        <AddNewWatchListBtn>+ADD COINS</AddNewWatchListBtn>
      </HeaderWrapper>
      <WatchListForm />
    </Container>
  );
};

export default Home;
