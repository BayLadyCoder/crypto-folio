import { useState } from 'react';
import {
  FormContainer,
  TopContainer,
  PortfolioNameContainer,
  PortfolioName,
  EditIconButton,
  CloseFormButton,
} from './PortfolioForm.styled';
import { usePortfolio } from '../../context/Portfolio/PortfolioContext';
import AddNewCoinForm from './AddNewCoinForm';
import EditPortfolioForm from './EditPortfolioForm';
interface Props {
  formStep: string;
  setFormStep: any;
}

const PortfolioForm: React.FC<Props> = ({ formStep, setFormStep }) => {
  const { portfolioName, updatePortfolioName, onClickClosePortfolioForm } =
    usePortfolio();

  const [newPortfolioName, setNewPortfolioName] = useState(portfolioName);
  const [portfolioNameFormOpen, setPortfolioNameFormOpen] = useState(false);

  const onChangePortfolioName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPortfolioName(e.target.value);
  };

  const onSaveNewPortfolioName = () => {
    updatePortfolioName(newPortfolioName);
    setPortfolioNameFormOpen(false);
  };

  if (formStep === 'add-coin') {
    return (
      <FormContainer>
        <AddNewCoinForm setFormStep={setFormStep} />
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <TopContainer>
        <PortfolioNameContainer>
          {portfolioNameFormOpen ? (
            <>
              <input
                type='text'
                value={newPortfolioName}
                onChange={onChangePortfolioName}
              />
              <button onClick={onSaveNewPortfolioName}>Save</button>
            </>
          ) : (
            <>
              <PortfolioName>{portfolioName}</PortfolioName>
              <EditIconButton onClick={() => setPortfolioNameFormOpen(true)}>
                edit icon
              </EditIconButton>
            </>
          )}
        </PortfolioNameContainer>
        <CloseFormButton onClick={onClickClosePortfolioForm} />
      </TopContainer>
      <EditPortfolioForm setFormStep={setFormStep} />
    </FormContainer>
  );
};

export default PortfolioForm;
