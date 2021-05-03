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

interface ContainerProps {
  alignCenter?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 80%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ alignCenter }) =>
    alignCenter ? "center" : "flex-start"};

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

export const ButtonLink = styled(Link)<ButtonProps>`
  border-radius: 4px;
  background: ${({ primary }) =>
    primary === "true" ? theme.color.secondary : "transparent"};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) =>
    primary === "true" ? "#fff" : theme.color.primary};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid transparent;
  border-color: ${({ primary }) =>
    primary === "true" ? theme.color.secondary : "transparent"};

  text-decoration: none;
  text-transform: uppercase;
  margin-left: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    color: ${({ primary }) =>
      primary === "true" ? "#fff" : theme.color.primary_bright};
    background: ${({ primary }) =>
      primary === "true" ? "#cc00ff" : "transparent"};

    border-color: ${({ primary }) =>
      primary === "true" ? "#444" : theme.color.primary_bright};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PageTitleProps {
  marginBottom?: boolean;
}

export const PageTitle = styled.h1<PageTitleProps>`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "20px" : "0px")};
  color: #fff;
  @media screen and (max-width: 960px) {
    font-size: 25px;
  }
`;

interface ButtonProps {
  primary?: string;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${({ primary }) =>
    primary === "true" ? theme.color.primary_bright : "transparent"};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) =>
    primary === "true" ? "#000" : theme.color.primary};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  border: 1px solid transparent;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    transition: all 0.2s linear;
    color: ${({ primary }) =>
      primary === "true" ? "#000" : theme.color.primary_bright};
    border-color: ${({ primary }) =>
      primary === "true" ? "#21b598" : theme.color.primary_bright};
    background: ${({ primary }) =>
      primary === "true" ? theme.color.primary : "transparent"};
  }

  @media screen and (max-width: 960px) {
    padding: ${({ big }) => (big ? "10px 50px" : "7px 14px")};
    font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
  }

  @media screen and (max-width: 550px) {
    padding: ${({ big }) => (big ? "8px 40px" : "5px 10px")};
  }
`;

export const Loading = styled.p`
  color: #fff;
  font-size: 25px;
  margin-top: 50px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  padding: 5px 0px;
  font-size: 15px;
`;

export const TextField = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border: none;
`;

export const TableName = styled.h2`
  font-size: 25px;
  color: #fff;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export default GlobalStyle;
