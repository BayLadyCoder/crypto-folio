import { useState, useEffect } from 'react';
import { MarketCoin } from '../../../types/coins';
import {
  DetailsContainer,
  BottomContainer,
  AddDetailsForm,
  FormTitle,
} from './AddOrEditCoinsForm.styled';
import { Button } from '../../../styles/globalStyles';
import { PortfolioCoinBasic } from '../../../types/coins';
import { TextFieldWithLabel, SearchCoinTextField } from '../../form_components';
import { usePortfolio } from '../../../context/Portfolio/PortfolioContext';

interface Props {
  marketCoins: MarketCoin[];
  onCloseForm: () => void;
  setFormStep: any;
}
const AddOrEditCoinsForm: React.FC<Props> = ({
  marketCoins,
  onCloseForm,
  setFormStep,
}) => {
  const {
    addNewCoinToPortfolio,
    portfolioCoinOptions,
    createPortfolioCoinOptions,
  } = usePortfolio();

  const [portfolioData, setPortfolioData] = useState<PortfolioCoinBasic>({
    name_with_symbol: '',
    bought_quantity: 0,
    bought_price_per_coin: 0,
    cost_basis: 0,
    total_gain_usd: 0,
    total_gain_percentage: 0,
    current_value: 0,
  });

  useEffect(() => {
    if (marketCoins.length > 0 && portfolioCoinOptions.length === 0)
      createPortfolioCoinOptions(marketCoins);
  }, [marketCoins, portfolioCoinOptions.length, createPortfolioCoinOptions]);

  const updatePortfolioData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

  const onSave = (e: React.MouseEvent) => {
    e.preventDefault();
    const { bought_quantity, cost_basis } = portfolioData;

    addNewCoinToPortfolio(
      {
        ...portfolioData,
        bought_quantity: Number(bought_quantity),
        cost_basis: Number(cost_basis),
        bought_price_per_coin: cost_basis / bought_quantity,
      },
      marketCoins
    );
    onCloseForm();
  };

  return (
    <DetailsContainer>
      <AddDetailsForm>
        <FormTitle>Add New Coin</FormTitle>
        <SearchCoinTextField
          value={portfolioData.name_with_symbol}
          name='name_with_symbol'
          handleChange={updatePortfolioData}
          coins={portfolioCoinOptions}
          hasLabel
        />
        <TextFieldWithLabel
          label='Quantity'
          name='bought_quantity'
          placeholder='How many coins do you have?'
          value={portfolioData.bought_quantity}
          handleChange={updatePortfolioData}
        />
        <TextFieldWithLabel
          label='Total Cost ($)'
          name='cost_basis'
          placeholder='Price you paid for this transaction'
          value={portfolioData.cost_basis}
          handleChange={updatePortfolioData}
        />
      </AddDetailsForm>
      <BottomContainer>
        <Button onClick={() => setFormStep('start')}>BACK</Button>
        <Button onClick={onSave} style={{ marginLeft: '10px' }} primary='true'>
          SAVE
        </Button>
      </BottomContainer>
    </DetailsContainer>
  );
};

export default AddOrEditCoinsForm;
