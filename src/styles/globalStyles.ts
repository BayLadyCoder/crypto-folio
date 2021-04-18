import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${theme.color.primary};
    /* font-family: "Hammersmith One", sans-serif; */
    font-family: 'Roboto', sans-serif;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${({ primary }) =>
    primary ? theme.color.primary : theme.color.secondary};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) =>
      primary ? theme.color.secondary : theme.color.primary};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
