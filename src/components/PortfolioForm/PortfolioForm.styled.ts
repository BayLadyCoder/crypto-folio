import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

export const FormContainer = styled.div`
  min-width: 350px;
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #fff;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: #444;
`;
export const PortfolioNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PortfolioName = styled.h2`
  font-size: 20px;
`;

export const EditIconButton = styled(AiFillEdit)`
  color: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 40px;
  border-radius: 50%;
  margin-left: 5px;

  &:hover {
    transition: all 0.2s linear;
    background: #223;
  }
`;

export const CloseFormButton = styled(VscChromeClose)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 40px;

  &:hover {
    transition: all 0.2s linear;
    background-color: #223;
  }
`;

export const SearchCoinInput = styled.input`
  width: 250px;
  padding: 10px;
  border: none;
  margin-bottom: 10px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AddDetailsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 10px 20px;
`;
export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 20px 20px;
`;

export const TextFieldInput = styled.input`
  padding: 10px;
  width: 300px;
  margin-bottom: 10px;
  border: none;
`;

export const TabMenuContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

interface TabMenuProps {
  tabValues: boolean;
}

export const TabMenu = styled.button<TabMenuProps>`
  padding: 5px 10px;

  background: ${({ tabValues }) => (tabValues ? "#08856c" : "#222")};
  color: ${({ tabValues }) => (tabValues ? "#fff" : "#bbb")};
  border: none;
  cursor: pointer;
  font-weight: 500;

  transition: background 0.3s ease;
`;

export const TabInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  padding: 5px 0px;
`;

export const CurrencyContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`;
export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RadioButton = styled.input`
  margin-right: 5px;
  color: red;
  background: red;
`;
