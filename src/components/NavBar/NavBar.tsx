import React from "react";
import {
  NavBarBigContainer,
  NavBarContainer,
  Wrapper,
  LogoAppNameLink,
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
        <LogoAppNameLink to="/crypto-folio">
          <Logo src={logo} alt="img" />
          <AppName>Crypto Folio</AppName>
        </LogoAppNameLink>
        <Wrapper>
          <MenuBtn to="/crypto-folio">Market</MenuBtn>
          {/* <MenuBtn>Trending</MenuBtn> */}
          <MenuBtn to="/crypto-folio/watchlist">Watchlist</MenuBtn>
          <MenuBtn to="/crypto-folio/portfolio">Portfolio</MenuBtn>
        </Wrapper>
        <Wrapper>
          <MenuBtn to="/crypto-folio/login" primary="true">
            Log In
          </MenuBtn>
          <Button to="/crypto-folio/sign-up" primary="true">
            Sign Up
          </Button>
        </Wrapper>
      </NavBarContainer>
    </NavBarBigContainer>
  );
};

export default NavBar;
