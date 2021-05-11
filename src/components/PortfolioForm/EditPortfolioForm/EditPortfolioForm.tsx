import { useState, useEffect } from "react";
import { MarketCoin } from "../../../types/coins";
import {
  FormContainer,
  TopContainer,
  PortfolioNameContainer,
  PortfolioName,
  EditIconButton,
  DetailsContainer,
  BottomContainer,
  CloseFormButton,
  AddDetailsForm,
  SelectPortfolioActionsContainer,
  FormTitle,
  Table,
  TableHead,
  TableHeadData,
  TableBody,
  TableBodyData,
  RemoveButton,
  TableRow,
  RemoveCoinIconButton,
  EditCoinIconButton,
} from "../PortfolioForm.styled";

import { Button } from "../../../styles/globalStyles";
import { PortfolioCoinBasic, PortfolioCoin } from "../../../types/coins";
import {
  TextFieldWithLabel,
  SearchCoinTextField,
  CurrencyRadioButtons,
} from "../../form_components";
import { RiAddFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import AddOrEditCoinsForm from "../AddOrEditCoinForm";

interface Props {
  setFormStep: any;
}

const EditPortfolioForm: React.FC<Props> = ({ setFormStep }) => {
  const onClickRemoveCoin = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <AddDetailsForm>
      <FormTitle>Edit Portfolio</FormTitle>
      <Table cellSpacing="0" cellPadding="0">
        <TableHead>
          <tr>
            <TableHeadData align="left">Crypto Currency</TableHeadData>
            <TableHeadData align="right">Quantity</TableHeadData>
            <TableHeadData align="right">
              Cost Basis <span>(USD/BTC)</span>
            </TableHeadData>
            <TableHeadData align="center">Actions</TableHeadData>
          </tr>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableBodyData align="left">Bitcoin (BTC)</TableBodyData>
            <TableBodyData align="right">2</TableBodyData>
            <TableBodyData align="right">$100,000</TableBodyData>
            <TableBodyData align="center">
              <EditCoinIconButton />
              <RemoveCoinIconButton onClick={onClickRemoveCoin} />
            </TableBodyData>
          </TableRow>
          <TableRow>
            <TableBodyData align="left">Dogecoin (DOGE)</TableBodyData>
            <TableBodyData align="right">200</TableBodyData>
            <TableBodyData align="right">$120</TableBodyData>
            <TableBodyData align="center">
              <EditCoinIconButton />
              <RemoveCoinIconButton onClick={onClickRemoveCoin} />
            </TableBodyData>
          </TableRow>
        </TableBody>
      </Table>

      <BottomContainer>
        <Button onClick={() => setFormStep("start")}>BACK</Button>
        <Button
          onClick={() => console.log("save")}
          style={{ marginLeft: "10px" }}
          primary="true"
        >
          SAVE
        </Button>
      </BottomContainer>
    </AddDetailsForm>
  );
};

export default EditPortfolioForm;
