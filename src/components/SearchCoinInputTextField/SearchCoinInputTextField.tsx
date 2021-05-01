import React from "react";
import {
  InputContainer,
  Label,
  TextFieldInput,
} from "../../styles/globalStyles";
import { MarketCoin } from "../../types/coins";

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  coins: MarketCoin[];
  name: string;
}

const SearchCoinInputTextField: React.FC<Props> = ({
  value,
  name,
  handleChange,
  coins,
}) => {
  return (
    <InputContainer>
      <Label htmlFor="coins">Coins</Label>
      <TextFieldInput
        type="text"
        list="coins"
        placeholder="Search"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <datalist id="coins">
        {coins.map((coin) => (
          <option
            key={coin.id}
            value={`${coin.name} (${coin.symbol.toUpperCase()})`}
          />
        ))}
      </datalist>
    </InputContainer>
  );
};

export default SearchCoinInputTextField;
