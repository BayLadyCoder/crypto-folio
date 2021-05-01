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
  SearchCoinInput,
  AddDetailsForm,
  TextFieldInput,
  TabMenuContainer,
  TabMenu,
  TabInputContainer,
  Label,
  CurrencyContainer,
  CurrencyWrapper,
  RadioButton,
} from "./PortfolioForm.styled";

import { Button } from "../../styles/globalStyles";
import { PortfolioCoinBasic } from "../../types/coins";
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
    if (e.target.name === "price_per_coin") {
      const pricePerCoin = Number(e.target.value);
      setPortfolioData({
        ...portfolioData,
        cost_basis: portfolioData.quantity * pricePerCoin,
      });
    } else {
      setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
    }
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
          <TabInputContainer>
            <Label htmlFor="Quantity">Coins</Label>

            <TextFieldInput
              type="text"
              list="coins"
              placeholder="Search"
              name="name_with_symbol"
              value={portfolioData.name_with_symbol}
              onChange={updatePortfolioData}
            />
            <datalist id="coins">
              {coins.map((coin) => (
                <option
                  key={coin.id}
                  value={`${coin.name} (${coin.symbol.toUpperCase()})`}
                />
              ))}
            </datalist>
          </TabInputContainer>
          <TabInputContainer>
            <Label htmlFor="quantity">Quantity</Label>
            <TextFieldInput
              type="text"
              name="quantity"
              placeholder="How many coins do you have?"
              value={portfolioData.quantity || ""}
              onChange={updatePortfolioData}
            />
          </TabInputContainer>
          <CurrencyContainer>
            <Label>Currency</Label>
            <CurrencyWrapper>
              <RadioButton
                type="radio"
                id="usd"
                name="currency"
                value="usd"
                onClick={() => onChooseCurrency("USD")}
              />
              <Label htmlFor="usd">USD</Label>
            </CurrencyWrapper>
            <CurrencyWrapper>
              <RadioButton
                type="radio"
                id="btc"
                name="currency"
                value="btc"
                onClick={() => onChooseCurrency("BTC")}
              />
              <Label htmlFor="btc">BTC</Label>
            </CurrencyWrapper>
          </CurrencyContainer>
          {currency && currency === "USD" ? (
            <TabInputContainer>
              <Label htmlFor="quantity">Price per Coin</Label>
              <TextFieldInput
                type="text"
                name="price_per_coin"
                placeholder="Price you paid per coin ($)"
                value={portfolioData.price_per_coin || ""}
                onChange={updatePortfolioData}
              />
            </TabInputContainer>
          ) : currency === "BTC" ? (
            <>
              <TabInputContainer>
                <Label htmlFor="quantity">Bitcoin Price</Label>
                <TextFieldInput
                  type="text"
                  name="price_per_coin"
                  placeholder="BTC price when bought this coin ($)"
                  value={portfolioData.price_per_coin || ""}
                  onChange={updatePortfolioData}
                />
              </TabInputContainer>
              <TabInputContainer>
                <Label htmlFor="quantity">Bitcoin Paid per Coin</Label>
                <TextFieldInput
                  type="text"
                  name="price_per_coin"
                  placeholder="Paid Bitcoin quantity per coin (₿)"
                  value={portfolioData.price_per_coin || ""}
                  onChange={updatePortfolioData}
                />
              </TabInputContainer>
              {estimate && (
                <p style={{ width: "250px", alignSelf: "start" }}>
                  estimated in USD ~ $3,000
                </p>
              )}
            </>
          ) : null}
        </AddDetailsForm>
        <table></table>
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
