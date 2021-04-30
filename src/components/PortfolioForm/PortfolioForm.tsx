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
  QuantityInput,
  TabMenuContainer,
  TabMenu,
  TabInputContainer,
  Label,
} from "./PortfolioForm.styled";

import { Button } from "../../styles/globalStyles";

interface Props {
  coins: MarketCoin[];
  onCloseForm: (e: React.MouseEvent) => void;
}

const PortfolioForm: React.FC<Props> = ({ coins, onCloseForm }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchCoinFormOpen, setSearchCoinFormOpen] = useState(true);
  const [addDetailsFormOpen, setAddDetailsFormOpen] = useState(true);
  const [tabValues, setTabValues] = useState("Price per Coin");

  const onChangeSearchCoinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickAddCoin = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchCoinFormOpen(false);
    setAddDetailsFormOpen(true);
  };

  const onClickPricePerCoin = () => {
    setTabValues("Price per Coin");
  };
  const onClickCostBasis = () => {
    setTabValues("Cost Basis");
  };

  // TODO: Refactor all search coin input in the applications

  return (
    <FormContainer>
      <TopContainer>
        <PortfolioNameContainer>
          <PortfolioName>My Portfolio</PortfolioName>
          <EditIconButton>edit icon</EditIconButton>
        </PortfolioNameContainer>
        <CloseFormButton onClick={onCloseForm} />
      </TopContainer>

      {addDetailsFormOpen && (
        <DetailsContainer>
          <AddDetailsForm>
            <TabInputContainer>
              <Label htmlFor="Quantity">Coins</Label>

              <SearchCoinInput
                type="text"
                list="coins"
                placeholder="Search"
                value={inputValue}
                onChange={onChangeSearchCoinInput}
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
              <Label htmlFor="Quantity">Quantity</Label>
              <QuantityInput
                type="text"
                placeholder="How many coins do you have?"
              />
            </TabInputContainer>
            <TabInputContainer>
              <TabMenuContainer>
                <TabMenu
                  tabValues={tabValues === "Price per Coin"}
                  onClick={onClickPricePerCoin}
                  disabled={tabValues === "Price per Coin"}
                >
                  Price per Coin
                </TabMenu>
                <TabMenu
                  tabValues={tabValues === "Cost Basis"}
                  onClick={onClickCostBasis}
                  disabled={tabValues === "Cost Basis"}
                >
                  Cost Basis
                </TabMenu>
              </TabMenuContainer>
              <QuantityInput type="text" placeholder="$" />
            </TabInputContainer>
          </AddDetailsForm>
          <table></table>
          <BottomContainer>
            <Button onClick={onCloseForm}>CANCEL</Button>
            <Button style={{ marginLeft: "10px" }} primary="true">
              SAVE
            </Button>
          </BottomContainer>
        </DetailsContainer>
      )}
    </FormContainer>
  );
};

export default PortfolioForm;
