import React from "react";
import { InputContainer, Label, TextField } from "../../../styles/globalStyles";
import { MarketCoin } from "../../../types/coins";

interface Props {
  width?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  coins: MarketCoin[];
  name: string;
}

const SearchCoinInputTextField: React.FC<Props> = ({
  width,
  value,
  name,
  handleChange,
  coins,
}) => {
  return (
    <InputContainer>
      <Label htmlFor="coins">Coins</Label>
      <TextField
        type="text"
        list="coins"
        placeholder="Search"
        name={name}
        value={value}
        onChange={handleChange}
        width={width}
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
