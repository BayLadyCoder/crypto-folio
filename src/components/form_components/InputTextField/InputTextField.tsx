import React from "react";
import {
  InputContainer,
  Label,
  TextFieldInput,
} from "../../../styles/globalStyles";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  value: number | string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <TextFieldInput
        type="text"
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default InputTextField;
