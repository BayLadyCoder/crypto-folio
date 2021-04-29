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
} from "./PortfolioForm.styled";

import { Button } from "../../styles/globalStyles";

interface Props {
  coins: MarketCoin[];
}

const PortfolioForm: React.FC<Props> = ({ coins }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeSearchCoinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // TODO: Refactor all search coin input in the applications

  return (
    <FormContainer>
      <TopContainer>
        <PortfolioNameContainer>
          <PortfolioName>My Portfolio</PortfolioName>
          <EditIconButton>edit icon</EditIconButton>
        </PortfolioNameContainer>
        <CloseFormButton />
      </TopContainer>
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
        <Button primary="true">+ ADD</Button>
      </SearchCoinsContainer>
      {/* <DetailsContainer>
        <form>
          <p>Name: </p> <p>Bitcoin (BTC)</p>
          <input type="text" placeholder="quantity" />
          <input type="text" placeholder="Price/Coin or Cost Basis" />
          <button>+ ADD</button>
        </form>
        <table></table>
        <BottomContainer>
          <button>CANCEL</button>
          <button>SAVE</button>
        </BottomContainer>
      </DetailsContainer> */}
    </FormContainer>
  );
};

export default PortfolioForm;
