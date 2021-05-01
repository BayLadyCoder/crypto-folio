import { useState } from "react";
import { MarketCoin } from "../../types/coins";
import {
  FormContainer,
  TopContainer,
  PortfolioNameContainer,
  PortfolioName,
  EditIconButton,
  DetailsContainer,
  BottomContainer,
  CloseFormButton,
  AddDetailsForm,
} from "./PortfolioForm.styled";

import {
  Button,
  InputContainer,
  Label,
  TextFieldInput,
} from "../../styles/globalStyles";
import { PortfolioCoinBasic } from "../../types/coins";
import CurrencyRadioButtons from "../form_components/CurrencyRadioButtons";
import InputTextField from "../form_components/InputTextField";
import SearchCoinInputTextField from "../form_components/SearchCoinInputTextField";
interface Props {
  coins: MarketCoin[];
  onCloseForm: (e: React.MouseEvent) => void;
  portfolioName: string;
  updatePortfolioName: (newName: string) => void;
  portfolioBasic: PortfolioCoinBasic;
  updatePortfolioBasic: (newData: PortfolioCoinBasic) => void;
}

const PortfolioForm: React.FC<Props> = ({
  coins,
  onCloseForm,
  portfolioName,
  updatePortfolioName,
  portfolioBasic,
  updatePortfolioBasic,
}) => {
  const [newPortfolioName, setNewPortfolioName] = useState(portfolioName);
  const [portfolioNameFormOpen, setPortfolioNameFormOpen] = useState(false);
  const [currency, setCurrency] = useState("");
  const [estimate, setEstimate] = useState(0);
  const [portfolioData, setPortfolioData] = useState<PortfolioCoinBasic>(
    portfolioBasic
  );
  const [boughtWithBitcoin, setBoughtWithBitcoin] = useState({
    btc_price_at_bought: 0,
    btc_paid_quantity: 0,
  });

  const onChangePortfolioName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPortfolioName(e.target.value);
  };

  const onSaveNewPortfolioName = () => {
    updatePortfolioName(newPortfolioName);
    setPortfolioNameFormOpen(false);
  };

  const updatePortfolioData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

  const onSave = (e: React.MouseEvent) => {
    e.preventDefault();
    updatePortfolioBasic(portfolioData);
    setPortfolioNameFormOpen(false);
  };
  const onChooseCurrency = (value: string) => {
    setCurrency(value);
  };

  const updateBoughtWithBitcoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoughtWithBitcoin({
      ...boughtWithBitcoin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormContainer>
      <TopContainer>
        <PortfolioNameContainer>
          {portfolioNameFormOpen ? (
            <>
              <input
                type="text"
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

      <DetailsContainer>
        <AddDetailsForm>
          <SearchCoinInputTextField
            value={portfolioData.name_with_symbol}
            name="name_with_symbol"
            handleChange={updatePortfolioData}
            coins={coins}
          />
          <InputTextField
            label="Quantity"
            name="quantity"
            placeholder="How many coins do you have?"
            value={portfolioData.quantity}
            handleChange={updatePortfolioData}
          />

          {portfolioData.name_with_symbol === "Bitcoin (BTC)" && (
            <InputTextField
              label="Cost Basis"
              name="cost_basis"
              placeholder="Price you paid for this transaction ($)"
              value={portfolioData.cost_basis}
              handleChange={updatePortfolioData}
            />
          )}

          {portfolioData.name_with_symbol &&
            portfolioData.name_with_symbol !== "Bitcoin (BTC)" && (
              <CurrencyRadioButtons onChooseCurrency={onChooseCurrency} />
            )}

          {portfolioData.name_with_symbol !== "Bitcoin (BTC)" &&
          currency &&
          currency === "USD" ? (
            <InputTextField
              label="Cost Basis"
              name="cost_basis"
              placeholder="Price you paid for this transaction ($)"
              value={portfolioData.cost_basis}
              handleChange={updatePortfolioData}
            />
          ) : currency === "BTC" ? (
            <>
              <InputTextField
                label="Bitcoin Price"
                name="btc_price_at_bought"
                placeholder="BTC price when bought this coin ($)"
                value={boughtWithBitcoin.btc_price_at_bought}
                handleChange={updateBoughtWithBitcoin}
              />
              <InputTextField
                label="Total Bitcoin Paid"
                name="btc_paid_quantity"
                placeholder="Total Bitcoin quantity spent (₿)"
                value={boughtWithBitcoin.btc_paid_quantity}
                handleChange={updateBoughtWithBitcoin}
              />

              {/* {estimate && (
                <p style={{ width: "250px", alignSelf: "start" }}>
                  estimated in USD ~ ${estimate}
                </p>
              )} */}
            </>
          ) : null}
        </AddDetailsForm>
        <BottomContainer>
          <Button onClick={onCloseForm}>CANCEL</Button>
          <Button
            onClick={onSave}
            style={{ marginLeft: "10px" }}
            primary="true"
          >
            SAVE
          </Button>
        </BottomContainer>
      </DetailsContainer>
    </FormContainer>
  );
};

export default PortfolioForm;
