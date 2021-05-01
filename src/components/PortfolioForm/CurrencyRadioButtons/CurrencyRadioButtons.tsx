import React from "react";
import {
  // Label,
  CurrencyContainer,
  CurrencyWrapper,
  RadioButton,
} from "./CurrencyRadioButtons.styled";
import { Label } from "../../../styles/globalStyles";
interface Props {
  onChooseCurrency: (value: string) => void;
}

const CurrencyRadioButtons: React.FC<Props> = ({ onChooseCurrency }) => {
  return (
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
  );
};

export default CurrencyRadioButtons;
