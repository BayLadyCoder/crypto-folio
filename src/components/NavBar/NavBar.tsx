import React from "react";
import { NavBarContainer, Logo, AppName } from "./NavBar.styled";
import logo from "../../images/logo.png";

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Logo src={logo} alt="img" />
      <AppName>Crypto Folio</AppName>
    </NavBarContainer>
  );
};

export default NavBar;
