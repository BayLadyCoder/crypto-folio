import { Container, PageTitle, Button } from "../../styles/globalStyles";
import { useWatchList } from "../../context/WatchList/WatchListContext";
import WatchList from "../../components/WatchListTable";

const WatchListPage = () => {
  const { watchList, watchListFormOpen, onClickOpenForm } = useWatchList();

  return (
    <Container>
      <PageTitle marginBottom>Your Watchlist</PageTitle>
      {!watchListFormOpen && (
        <Button
          primary="true"
          onClick={() => console.log("Open Create new watchlist form")}
        >
          + CREATE NEW WATCHLIST
        </Button>
      )}
      <WatchList
        tableName="Watchlist 1"
        coins={watchList}
        watchListFormOpen={watchListFormOpen}
        onClickOpenForm={onClickOpenForm}
      />
    </Container>
  );
};

export default WatchListPage;
