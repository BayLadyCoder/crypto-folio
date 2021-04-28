import { Container, PageTitle, Button } from "../../styles/globalStyles";
import { useWatchList } from "../../context/WatchList/WatchListContext";
import WatchListTable from "../../components/WatchListTable";

const WatchListPage = () => {
  const {
    watchList,
    watchListName,
    updateWatchListName,
    watchListFormOpen,
    onClickOpenForm,
  } = useWatchList();

  return (
    <Container>
      <PageTitle>Watchlist</PageTitle>
      {/* {!watchListFormOpen && (
        <Button
          primary="true"
          onClick={() => console.log("Open Create new watchlist form")}
        >
          + CREATE NEW WATCHLIST
        </Button>
      )} */}
      <WatchListTable
        coins={watchList}
        watchListFormOpen={watchListFormOpen}
        onClickOpenForm={onClickOpenForm}
        watchListName={watchListName}
        updateWatchListName={updateWatchListName}
      />
    </Container>
  );
};

export default WatchListPage;
