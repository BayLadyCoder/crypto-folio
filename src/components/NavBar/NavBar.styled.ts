import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const NavBarBigContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #466e64;
`;
export const NavBarContainer = styled.header`
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 60px;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`;

export const LogoAppNameLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const AppName = styled.h1`
  font-family: "Zen Dots", cursive;
  font-size: 17px;
  color: ${theme.color.primary};
  font-weight: 400;
`;

interface MenuBtnProps {
  primary?: string;
}

export const MenuBtn = styled(Link)<MenuBtnProps>`
  background: transparent;
  border: none;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ primary }) =>
    primary === "true" ? theme.color.primary : "#fff"};

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) =>
      primary === "true" ? "#3d3d3d" : theme.color.secondary};
    color: ${({ primary }) =>
      primary === "true" ? theme.color.primary_bright : "#fff"};
  }
`;
