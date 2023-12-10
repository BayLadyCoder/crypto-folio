import React, { useContext } from 'react';
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
import { MarketCoinsContext } from '../../../context/MarketCoins/MarketCoinsContext';
import { Button } from '../../../styles/globalStyles';
import { RiAddFill } from 'react-icons/ri';
interface Props {
  setFormStep: any;
}

const EditPortfolioForm: React.FC<Props> = ({ setFormStep }) => {
  const { portfolioCoins, deletePortfolioCoin } = usePortfolio();
  const { marketCoins } = useContext(MarketCoinsContext);

  const onClickRemoveCoin = (e: React.MouseEvent, coinSymbol: string) => {
    e.preventDefault();
    deletePortfolioCoin(coinSymbol, marketCoins);
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
        <Button onClick={() => setFormStep('add-coin')} primary='true' small>
          <RiAddFill /> NEW COIN
        </Button>
      </div>
      <Table cellSpacing='0' cellPadding='0'>
        <TableHead>
          <tr>
            <TableHeadData align='left'>Crypto Currency</TableHeadData>
            <TableHeadData align='right'>Quantity</TableHeadData>
            <TableHeadData align='right'>
              Cost Basis <span>(USD/BTC)</span>
            </TableHeadData>
            <TableHeadData align='center'>Actions</TableHeadData>
          </tr>
        </TableHead>
        <TableBody>
          {portfolioCoins.map((coin) => (
            <TableRow>
              <TableBodyData align='left'>
                {coin.name_with_symbol}
              </TableBodyData>
              <TableBodyData align='right'>
                <TextField
                  style={{ width: '60px' }}
                  type='text'
                  value={coin.bought_quantity}
                />
              </TableBodyData>
              <TableBodyData align='right'>
                ${' '}
                <TextField
                  style={{ width: '80px' }}
                  type='text'
                  value={coin.cost_basis}
                />
              </TableBodyData>
              <TableBodyData align='center'>
                <RemoveCoinIconButton
                  onClick={(e: React.MouseEvent) =>
                    onClickRemoveCoin(e, coin.symbol)
                  }
                />
              </TableBodyData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AddDetailsForm>
  );
};

export default EditPortfolioForm;
