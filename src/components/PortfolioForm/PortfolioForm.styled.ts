import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';
import { RiDeleteBin5Line } from 'react-icons/ri';

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
  font-size: 17px;
  font-weight: 400;
`;

export const EditIconButton = styled(AiFillEdit)`
  color: #fff;
  padding: 8px;
  cursor: pointer;
  font-size: 39px;
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

export const SelectPortfolioActionsContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const FormTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const Table = styled.table`
  width: 600px;
`;

export const TableHead = styled.thead`
  background: #ccc;
  color: #000;
`;

interface TableHeadDataProps {
  align: string;
}

export const TableHeadData = styled.th<TableHeadDataProps>`
  padding: 10px;
  text-align: ${({ align }) => align};
`;

export const TableBody = styled.tbody`
  background: #222;
`;

interface TableBodyDataProps {
  align: string;
}

export const TableBodyData = styled.td<TableBodyDataProps>`
  text-align: ${({ align }) => align};
  padding: 15px;
  border-bottom: solid 1px #777;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  background: #111;
  color: #ff8573;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ff8573;

  &:hover {
    transition: all 0.2s linear;
    background: #c92e16;
    color: #fff;
    border: 1px solid #c92e16;
  }
`;
export const RemoveCoinIconButton = styled(RiDeleteBin5Line)`
  cursor: pointer;
  background: #111;
  color: #ff8573;
  padding: 8px;
  border-radius: 4px;
  border: none;
  font-size: 42px;
  font-weight: 500;
  border: 1px solid #ff8573;
  border-radius: 50%;

  &:hover {
    transition: all 0.2s linear;
    background: #f25038;
    color: #000;
    border: 1px solid #f25038;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    transition: all 0.2s linear;
    background: #000;
  }
`;
