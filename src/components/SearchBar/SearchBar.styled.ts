import styled from "styled-components";
import theme from "../../styles/theme";
import { ImSearch } from "react-icons/im";

export const SearchBarContainer = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: 50px;
`;

export const SearchInput = styled.input`
  padding: 10px 20px;
  width: 350px;
  background: #404040;
  color: ${theme.color.primary_bright};
  border: none;
  border-radius: 40px;
  box-shadow: 0 0 3px 0 #ddd;
  -moz-outline-radius: 40px;
  color: #fff;
  &::placeholder {
    color: #d1d1d1;
  }
`;

export const SearchIcon = styled(ImSearch)`
  color: #d1d1d1;
  font-size: 20px;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 10px;
  position: relative;
  left: -50px;

  &:hover {
    background: #222;
  }
  &:hover ${SearchIcon} {
    color: ${theme.color.primary};
  }
`;
