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
  width: 100%;
  height: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
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
  primary?: boolean;
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
  color: ${({ primary }) => (primary ? theme.color.primary : "#fff")};

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) =>
      primary ? "#3d3d3d" : theme.color.secondary};
    color: ${({ primary }) => (primary ? theme.color.primary_bright : "#fff")};
  }
`;