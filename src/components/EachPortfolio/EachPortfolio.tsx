import { useState } from 'react';
import { MarketCoin } from '../../types/coins';
import { PortfolioContainer } from './EachPortfolio.styled';
import { HeaderWrapper, Button, TableName } from '../../styles/globalStyles';
import PortfolioForm from '../PortfolioForm';
import PortfolioTable from '../PortfolioTable';
import { usePortfolio } from '../../context/Portfolio/PortfolioContext';

interface Props {
  marketCoins: MarketCoin[];
}

const EachPortfolio: React.FC<Props> = ({ marketCoins }) => {
  const {
    portfolioName,
    portfolioFormOpen,
    onClickOpenPortfolioForm,
    onClickClosePortfolioForm,
    portfolioCoins,
  } = usePortfolio();

  const [formStep, setFormStep] = useState('start');
  const onClickEditPortfolio = () => {
    setFormStep('edit-portfolio');
    onClickOpenPortfolioForm();
  };
  const onClickAddCoins = () => {
    setFormStep('add-coin');
    onClickOpenPortfolioForm();
  };
  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{portfolioName}</TableName>
        {!portfolioFormOpen && portfolioCoins.length > 0 ? (
          <Button onClick={onClickEditPortfolio}>EDIT PORTFOLIO</Button>
        ) : (
          !portfolioFormOpen && (
            <Button onClick={onClickAddCoins}>+ADD COINS</Button>
          )
        )}
      </HeaderWrapper>
      {portfolioFormOpen && (
        <PortfolioForm
          marketCoins={marketCoins}
          onCloseForm={onClickClosePortfolioForm}
          formStep={formStep}
          setFormStep={setFormStep}
        />
      )}

      {portfolioCoins.length > 0 && !portfolioFormOpen && (
        <PortfolioTable coins={portfolioCoins} />
      )}
    </PortfolioContainer>
  );
};

export default EachPortfolio;
