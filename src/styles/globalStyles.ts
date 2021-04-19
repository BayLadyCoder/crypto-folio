import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family: "Hammersmith One", sans-serif; */
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline-color: #4a4a4a;
}
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`;

interface ButtonProps {
  primary?: string;
  big?: boolean;
  fontBig?: boolean;
}

export const Button = styled(Link)<ButtonProps>`
  border-radius: 4px;
  background: ${({ primary }) =>
    primary === "true" ? theme.color.primary : theme.color.secondary};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) =>
      primary === "true" ? theme.color.secondary : theme.color.primary};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  color: #fff;
`;

export default GlobalStyle;
