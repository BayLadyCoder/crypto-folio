import React from "react";
import { InputContainer, Label, TextField } from "../../../styles/globalStyles";
import { MarketCoin } from "../../../types/coins";

interface Props {
  width?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  coins: MarketCoin[];
  name: string;
  hasLabel?: boolean;
}
const SearchCoinInputTextField: React.FC<Props> = ({
  value,
  name,
  handleChange,
  coins,
  hasLabel,
}) => {
  return (
    <InputContainer>
      {hasLabel && <Label htmlFor="coins">Crypto Currencies</Label>}
      <TextField
        type="search"
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
