import { useState } from 'react';
import { PortfolioContainer } from './EachPortfolio.styled';
import { HeaderWrapper, Button, TableName } from '../../styles/globalStyles';
import PortfolioForm from '../PortfolioForm';
import PortfolioTable from '../PortfolioTable';
import { usePortfolio } from '../../context/Portfolio/PortfolioContext';

const EachPortfolio: React.FC = () => {
  const {
    portfolioName,
    portfolioFormOpen,
    onClickOpenPortfolioForm,
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

  const hasCoinInPortfolio = portfolioCoins.length > 0;
  return (
    <PortfolioContainer>
      <HeaderWrapper>
        <TableName>{portfolioName}</TableName>
        {!portfolioFormOpen && (
          <Button
            onClick={
              hasCoinInPortfolio ? onClickEditPortfolio : onClickAddCoins
            }
          >
            {hasCoinInPortfolio ? 'EDIT PORTFOLIO' : '+ADD COINS'}
          </Button>
        )}
      </HeaderWrapper>
      {portfolioFormOpen && (
        <PortfolioForm formStep={formStep} setFormStep={setFormStep} />
      )}

      {hasCoinInPortfolio && !portfolioFormOpen && <PortfolioTable />}
    </PortfolioContainer>
  );
};

export default EachPortfolio;
