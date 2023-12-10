import {
  BottomContainer,
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
import { Button } from '../../../styles/globalStyles';
import { usePortfolio } from '../../../context/Portfolio/PortfolioContext';
import { TextField } from '../../../styles/globalStyles';

interface Props {
  setFormStep: any;
}

const EditPortfolioForm: React.FC<Props> = ({ setFormStep }) => {
  const { portfolioCoins } = usePortfolio();

  const onClickRemoveCoin = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  console.log({ portfolioCoins });
  return (
    <AddDetailsForm>
      <FormTitle>Edit Portfolio</FormTitle>
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
                {/* {coin.bought_quantity} */}
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
                <RemoveCoinIconButton onClick={onClickRemoveCoin} />
              </TableBodyData>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <BottomContainer>
        <Button onClick={() => setFormStep('start')}>BACK</Button>
        <Button
          onClick={() => console.log('save')}
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
