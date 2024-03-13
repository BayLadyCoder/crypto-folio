import React, { useState } from 'react';
import {
  AddDetailsForm,
  FormTitle,
  Table,
  TableHead,
  TableHeadData,
  TableBody,
  TableBodyData,
  TableRow,
  RemoveCoinIconButton,
} from '../PortfolioForm.styled';
import { usePortfolio } from '../../../context/Portfolio/PortfolioContext';
import { TextField } from '../../../styles/globalStyles';
import { Button } from '../../../styles/globalStyles';
import { RiAddFill } from 'react-icons/ri';
import { BottomContainer } from '../AddNewCoinForm/AddNewCoinForm.styled';
import { PortfolioCoin, MarketCoin } from '../../../types/coins';
import { marketCoins } from '../../../staticData/marketCoins';

interface Props {
  setFormStep: any;
}

const EditPortfolioForm: React.FC<Props> = ({ setFormStep }) => {
  const {
    portfolioCoins,
    onClickClosePortfolioForm,
    updatePortfolioCoins,
    deletePortfolioCoin,
  } = usePortfolio();
  const [isFormValid, setIsFormValid] = useState<Record<string, boolean>>({
    bought_quantity: true,
    cost_basis: true,
  });
  const [formData, setFormData] = useState<PortfolioCoin[]>(portfolioCoins);

  const onClickRemoveCoin = (coinSymbol: string) => {
    deletePortfolioCoin(coinSymbol, marketCoins as MarketCoin[]);
    setFormData((prevFormData) => {
      return prevFormData.filter((coin) => coin.symbol !== coinSymbol);
    });
  };

  const onChangeFormData = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: 'bought_quantity' | 'cost_basis',
    coinId: string
  ) => {
    const value = Number(e.target.value) || 0;
    const minValue = name === 'bought_quantity' ? 1 : 0;

    setIsFormValid((prevIsFormValid) => {
      const newIsFormValid = { ...prevIsFormValid };

      newIsFormValid[name] = value >= minValue;
      return newIsFormValid;
    });

    setFormData((prevFormData) => {
      return prevFormData.map((coin) => {
        if (coin.id !== coinId) {
          return coin;
        }

        const updatedCoin = { ...coin };
        updatedCoin[name] = value;
        return updatedCoin;
      });
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updatePortfolioCoins(formData);
    onClickClosePortfolioForm();
  };

  return (
    <AddDetailsForm>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <FormTitle>Edit Portfolio</FormTitle>
        <Button type='button' onClick={() => setFormStep('add-coin')}>
          <RiAddFill /> NEW COIN
        </Button>
      </div>
      <Table cellSpacing='0' cellPadding='0'>
        <TableHead>
          <tr>
            <TableHeadData align='left'>Crypto Currency</TableHeadData>
            <TableHeadData align='right'>Quantity</TableHeadData>
            <TableHeadData align='right'>Price Paid (coin)</TableHeadData>
            <TableHeadData align='right'>
              Cost Basis <span>(USD/BTC)</span>
            </TableHeadData>
            <TableHeadData align='center'>Actions</TableHeadData>
          </tr>
        </TableHead>
        <TableBody>
          {formData.map((coin, index) => (
            <TableRow key={coin.id}>
              <TableBodyData align='left'>
                {coin.name_with_symbol}
              </TableBodyData>
              <TableBodyData align='right'>
                <TextField
                  style={{
                    width: '60px',
                    border: isFormValid.bought_quantity ? '' : 'red solid 2px',
                  }}
                  type='number'
                  value={coin.bought_quantity}
                  min={1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeFormData(e, 'bought_quantity', coin.id);
                  }}
                />
              </TableBodyData>
              <TableBodyData align='right'>
                {coin.bought_price_per_coin}
              </TableBodyData>
              <TableBodyData align='right'>
                ${' '}
                <TextField
                  style={{
                    width: '80px',
                    border: isFormValid.cost_basis ? '' : 'red solid 2px',
                  }}
                  type='text'
                  value={coin.cost_basis}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeFormData(e, 'cost_basis', coin.id);
                  }}
                />
              </TableBodyData>
              <TableBodyData align='center'>
                <RemoveCoinIconButton
                  onClick={() => onClickRemoveCoin(coin.symbol)}
                />
              </TableBodyData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BottomContainer>
        <Button type='button' onClick={onClickClosePortfolioForm}>
          CLOSE
        </Button>
        <Button
          type='submit'
          onClick={handleSubmit}
          style={{ marginLeft: '10px' }}
          primary='true'
        >
          SAVE
        </Button>
      </BottomContainer>
    </AddDetailsForm>
  );
};

export default EditPortfolioForm;
