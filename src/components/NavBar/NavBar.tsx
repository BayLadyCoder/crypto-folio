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
          <MenuBtn>Market</MenuBtn>
          {/* <MenuBtn>Trending</MenuBtn> */}
          <MenuBtn>Watchlist</MenuBtn>
          <MenuBtn>Portfolio</MenuBtn>
        </Wrapper>
        <Wrapper>
          <MenuBtn primary>Log In</MenuBtn>
          <Button primary>Sign Up</Button>
        </Wrapper>
      </NavBarContainer>
    </NavBarBigContainer>
  );
};

export default NavBar;
