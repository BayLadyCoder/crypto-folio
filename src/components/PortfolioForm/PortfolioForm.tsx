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

  // TODO: Refactor all search coin input in the applications

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
              <InputContainer>
                <Label htmlFor="btc_price_at_bought">Bitcoin Price</Label>
                <TextFieldInput
                  type="text"
                  name="btc_price_at_bought"
                  placeholder="BTC price when bought this coin ($)"
                  // value={portfolioData.total_price || ""}
                  // onChange={updatePortfolioData}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="quantity">Total Bitcoin Paid</Label>
                <TextFieldInput
                  type="text"
                  name="total_btc_paid_quantity"
                  placeholder="Total paid Bitcoin quantity (₿)"
                  // value={portfolioData.total_price || ""}
                  // onChange={updatePortfolioData}
                />
              </InputContainer>
              {/* {estimate && (
                <p style={{ width: "250px", alignSelf: "start" }}>
                  estimated in USD ~ ${estimate}
                </p>
              )} */}
            </>
          ) : (
            <InputTextField
              label="Cost Basis"
              name="cost_basis"
              placeholder="Price you paid for this transaction ($)"
              value={portfolioData.cost_basis}
              handleChange={updatePortfolioData}
            />
          )}
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
