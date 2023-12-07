import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  NavBarBigContainer,
  NavBarContainer,
  Wrapper,
  LogoAppNameLink,
  Logo,
  AppName,
  MenuBtn,
} from './NavBar.styled';
import logo from '../../images/logo.png';
import { ButtonLink } from '../../styles/globalStyles';

const NavBar: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <NavBarBigContainer>
      <NavBarContainer>
        <LogoAppNameLink to='/crypto-folio'>
          <Logo src={logo} alt='img' />
          <AppName>Crypto Folio</AppName>
        </LogoAppNameLink>
        <Wrapper>
          <MenuBtn to='/crypto-folio'>Market</MenuBtn>
          {/* <MenuBtn>Trending</MenuBtn> */}
          <MenuBtn to='/crypto-folio/watchlist'>Watch List</MenuBtn>
          <MenuBtn to='/crypto-folio/portfolio'>Portfolio</MenuBtn>
        </Wrapper>
        {/* <Wrapper>
          <ButtonLink to="/crypto-folio/login">LOG IN</ButtonLink>
          <ButtonLink to="/crypto-folio/sign-up" primary="true">
            Sign Up
          </ButtonLink>
        </Wrapper> */}
      </NavBarContainer>
    </NavBarBigContainer>
  );
};

export default NavBar;
