import styled from "styled-components";
import { HiOutlineX } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";

export const Form = styled.form`
  width: 950px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #fff;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 450px;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 330px;
  }
`;

export const FormLeftContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #555;
  padding: 10px 20px 20px 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media screen and (max-width: 960px) {
    width: 100%;
    border-bottom-left-radius: 0px;
  }
`;
export const FormRightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #444;
  padding: 10px 20px 20px 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media screen and (max-width: 960px) {
    width: 100%;
    border-top-right-radius: 0px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  padding: 10px;
`;

// export const AddCoinsInput = styled.input`
//   width: 100%;
//   padding: 5px 10px;
//   margin-bottom: 10px;
// `;

export const CoinsContainer = styled.div`
  background-color: #222;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 120px;
  max-height: 450px;
  width: 100%;
  border: 1px solid #aaa;
  padding: 10px 0px 0px 10px;
  overflow-y: scroll;
`;

export const CoinName = styled.p`
  cursor: default;
`;

export const DeleteCoinIcon = styled(HiOutlineX)`
  font-size: 18px;
  width: 15px;
  height: 15px;
  background: #ddd;
  font-weight: 700;
  border-radius: 50%;
`;
export const DeleteCoinBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 4px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: #db1d1d !important;
    color: #fff;
    border: 1px solid #fff;

    ${DeleteCoinIcon} {
      background: #db1d1d !important;
    }
  }
`;

export const Coin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #524101;
  padding: 8px 12px;
  border-radius: 20px;
  border: 2px solid #bbb;
  color: #eee;
  margin-bottom: 10px;
  margin-right: 10px;

  &:hover {
    background-color: #786001;
    color: #fff;
    border: 2px solid #fff;

    ${DeleteCoinBtn},${DeleteCoinIcon} {
      background: #ffcc00;
    }
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
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const CloseFormButtonLeft = styled(VscChromeClose)`
  display: none;
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
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const FormHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const WatchListNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const EditWatchListNameButton = styled(AiFillEdit)`
  color: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 40px;
  border-radius: 50%;

  &:hover {
    background: #223;
  }
`;
