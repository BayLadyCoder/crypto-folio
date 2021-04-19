import React from "react";
import {
  NavBarBigContainer,
  NavBarContainer,
  Wrapper,
  Logo,
  AppName,
  MenuBtn,
} from "./NavBar.styled";
import logo from "../../images/logo.png";
import { Button } from "../../styles/globalStyles";

const NavBar: React.FC = () => {
  return (
    <NavBarBigContainer>
      <NavBarContainer>
        <Wrapper>
          <Logo src={logo} alt="img" />
          <AppName>Crypto Folio</AppName>
        </Wrapper>
        <Wrapper>
          <MenuBtn to="/crypto-folio">Market</MenuBtn>
          {/* <MenuBtn>Trending</MenuBtn> */}
          <MenuBtn to="/watchlist">Watchlist</MenuBtn>
          <MenuBtn to="/portfolio">Portfolio</MenuBtn>
        </Wrapper>
        <Wrapper>
          <MenuBtn to="/login" primary>
            Log In
          </MenuBtn>
          <Button to="/sign-up" primary>
            Sign Up
          </Button>
        </Wrapper>
      </NavBarContainer>
    </NavBarBigContainer>
  );
};

export default NavBar;
