import { useEffect, useContext } from 'react';
import { Container, PageTitle } from '../../styles/globalStyles';
import { useWatchList } from '../../context/WatchList/WatchListContext';
import EachWatchList from '../../components/EachWatchList';
import { MarketCoinsContext } from '../../context/MarketCoins/MarketCoinsContext';

const WatchListPage = () => {
  const {
    watchList,
    watchListName,
    updateWatchListName,
    watchListFormOpen,
    onClickOpenForm,
    getWatchList,
  } = useWatchList();
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);

  const getMarketCoins = async () => {
    const coins = await fetchMarketCoins();
    getWatchList(coins);
  };

  useEffect(() => {
    if (marketCoins.length === 0) {
      getMarketCoins();
    } else {
      getWatchList(marketCoins);
    }
  }, []);

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
      <EachWatchList
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
