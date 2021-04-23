import styled from "styled-components";
import theme from "../../styles/theme";
import { HiOutlineX } from "react-icons/hi";

export const FormWrapper = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  width: 900px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
`;

export const FormLeftContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #555;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const FormRightContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #444;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

export const AddCoinsInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const AddCoinBtn = styled.button`
  padding: 10px 20px;
`;

export const CoinsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CoinName = styled.p`
  cursor: default;
`;

export const DeleteCoinIcon = styled(HiOutlineX)`
  font-size: 18px;
  width: 15px;
  height: 15px;
  background: #acf2e4;
  border-radius: 50%;
`;
export const DeleteCoinBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: none;
  padding: 5px;
  border-radius: 50%;
  background-color: #acf2e4;
  cursor: pointer;

  &:hover {
    background: #e31b1b !important;
    color: #fff;

    ${DeleteCoinIcon} {
      background: #e31b1b !important;
    }
  }
`;

export const Coin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 8px 12px;
  border-radius: 20px;
  border: 2px solid #acf2e4;
  color: #acf2e4;
  margin-bottom: 10px;
  margin-right: 10px;

  &:hover {
    border: 2px solid ${theme.color.primary};
    color: ${theme.color.primary};

    ${DeleteCoinBtn},${DeleteCoinIcon} {
      background: #ff8787;
    }
  }
`;
