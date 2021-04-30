import { useState } from "react";
import { MarketCoin } from "../../types/coins";
import {
  FormContainer,
  TopContainer,
  PortfolioNameContainer,
  PortfolioName,
  EditIconButton,
  SearchCoinsContainer,
  DetailsContainer,
  BottomContainer,
  CloseFormButton,
  SearchCoinInput,
  AddDetailsForm,
} from "./PortfolioForm.styled";

import { Button } from "../../styles/globalStyles";

interface Props {
  coins: MarketCoin[];
  onCloseForm: (e: React.MouseEvent) => void;
}

const PortfolioForm: React.FC<Props> = ({ coins, onCloseForm }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchCoinFormOpen, setSearchCoinFormOpen] = useState(true);
  const [addDetailsFormOpen, setAddDetailsFormOpen] = useState(false);

  const onChangeSearchCoinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickAddCoin = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchCoinFormOpen(false);
    setAddDetailsFormOpen(true);
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
      {searchCoinFormOpen && (
        <SearchCoinsContainer>
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
          <Button primary="true" onClick={handleClickAddCoin}>
            + ADD
          </Button>
        </SearchCoinsContainer>
      )}
      {addDetailsFormOpen && (
        <DetailsContainer>
          <AddDetailsForm>
            <div>
              <p>Name: </p> <p>Bitcoin (BTC)</p>
            </div>
            <input type="text" placeholder="Quantity" />
            <input type="text" placeholder="Price per Coin or Cost Basis" />
            {/* <button>+ ADD</button> */}
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
