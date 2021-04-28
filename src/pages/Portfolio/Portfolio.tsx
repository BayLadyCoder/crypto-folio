import { Container, HeaderWrapper, PageTitle } from "../../styles/globalStyles";
import PortfolioTable from "../../components/PortfolioTable";
import PortfolioForm from "../../components/PortfolioForm";

const Home = () => {
  return (
    <Container>
      <PageTitle>Portfolio</PageTitle>
      <PortfolioTable
        // coins={watchList}
        // watchListFormOpen={watchListFormOpen}
        // onClickOpenForm={onClickOpenForm}
        watchListName="My Portfolio"
        // updateWatchListName={updateWatchListName}
      />
      <PortfolioForm />
    </Container>
  );
};

export default Home;
