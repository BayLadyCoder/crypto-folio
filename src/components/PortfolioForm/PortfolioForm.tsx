import { useState } from 'react';
import { MarketCoin } from '../../types/coins';
import {
  FormContainer,
  TopContainer,
  PortfolioNameContainer,
  PortfolioName,
  EditIconButton,
  CloseFormButton,
  SelectPortfolioActionsContainer,
} from './PortfolioForm.styled';
import { Button } from '../../styles/globalStyles';
import { usePortfolio } from '../../context/Portfolio/PortfolioContext';
import { RiAddFill } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import AddOrEditCoinForm from './AddOrEditCoinForm';
import EditPortfolioForm from './EditPortfolioForm';
interface Props {
  marketCoins: MarketCoin[];
  onCloseForm: () => void;
  formStep: string;
  setFormStep: any;
}

const PortfolioForm: React.FC<Props> = ({
  marketCoins,
  onCloseForm,
  formStep,
  setFormStep,
}) => {
  const { portfolioName, updatePortfolioName } = usePortfolio();

  const [newPortfolioName, setNewPortfolioName] = useState(portfolioName);
  const [portfolioNameFormOpen, setPortfolioNameFormOpen] = useState(false);

  const onChangePortfolioName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPortfolioName(e.target.value);
  };

  const onSaveNewPortfolioName = () => {
    updatePortfolioName(newPortfolioName);
    setPortfolioNameFormOpen(false);
  };

  const onClickPortfolioActionButton = (value: string) => {
    setFormStep(value);
  };

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
        <CloseFormButton onClick={onCloseForm} />
      </TopContainer>
      {formStep === 'start' && (
        <SelectPortfolioActionsContainer>
          <Button
            onClick={() => onClickPortfolioActionButton('add-coin')}
            primary='true'
          >
            <RiAddFill style={{ marginRight: '5px' }} /> ADD NEW COIN
          </Button>
          <Button
            onClick={() => onClickPortfolioActionButton('edit-portfolio')}
            style={{ marginLeft: '5px' }}
          >
            <MdModeEdit style={{ marginRight: '5px' }} /> EDIT PORTFOLIO
          </Button>
        </SelectPortfolioActionsContainer>
      )}
      {formStep === 'add-coin' && (
        <AddOrEditCoinForm
          marketCoins={marketCoins}
          onCloseForm={onCloseForm}
          setFormStep={setFormStep}
        />
      )}
      {formStep === 'edit-portfolio' && (
        <EditPortfolioForm setFormStep={setFormStep} />
      )}
    </FormContainer>
  );
};

export default PortfolioForm;
