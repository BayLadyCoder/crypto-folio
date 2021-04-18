import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #181818;
  min-height: 100vh;
  width: 100vw;
`;
export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 150px;
`;
export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;

export const AppName = styled.h1`
  font-size: 50px;
  color: #38d7b7;
  margin: 40px 0;
  font-weight: 400;
`;
