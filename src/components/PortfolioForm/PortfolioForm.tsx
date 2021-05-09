import { useState, useEffect } from "react";
import { MarketCoin } from "../../types/coins";
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
} from "./PortfolioForm.styled";

import { Button } from "../../styles/globalStyles";
import { PortfolioCoinBasic, PortfolioCoin } from "../../types/coins";
import {
  TextFieldWithLabel,
  SearchCoinTextField,
  CurrencyRadioButtons,
} from "../form_components";
import { RiAddFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import AddOrEditCoinsForm from "./AddOrEditCoinForm";
interface Props {
  marketCoins: MarketCoin[];
  onCloseForm: () => void;
  portfolioName: string;
  updatePortfolioName: (newName: string) => void;
  addNewCoinToPortfolio: (
    newData: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => void;
  portfolioCoinOptions: MarketCoin[];
  createPortfolioCoinOptions: (marketCoins: MarketCoin[]) => void;
  portfolioCoins: PortfolioCoin[];
  formStep: string;
  setFormStep: any;
}

const PortfolioForm: React.FC<Props> = ({
  marketCoins,
  onCloseForm,
  portfolioName,
  updatePortfolioName,
  addNewCoinToPortfolio,
  portfolioCoinOptions,
  createPortfolioCoinOptions,
  portfolioCoins,
  formStep,
  setFormStep,
}) => {
  const [newPortfolioName, setNewPortfolioName] = useState(portfolioName);
  const [portfolioNameFormOpen, setPortfolioNameFormOpen] = useState(false);

  const onChangePortfolioName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPortfolioName(e.target.value);
  };

  const onSaveNewPortfolioName = () => {
    updatePortfolioName(newPortfolioName);
    setPortfolioNameFormOpen(false);
  };

  const onClickPortfolioActionButton = (value: string) => {
    setFormStep(value);
  };

  const onClickRemoveCoin = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <TopContainer>
        <PortfolioNameContainer>
          {portfolioNameFormOpen ? (
            <>
              <input
                type="text"
                value={newPortfolioName}
                onChange={onChangePortfolioName}
              />
              <button onClick={onSaveNewPortfolioName}>Save</button>
            </>
          ) : (
            <>
              <PortfolioName>{portfolioName}</PortfolioName>
              <EditIconButton onClick={() => setPortfolioNameFormOpen(true)}>
                edit icon
              </EditIconButton>
            </>
          )}
        </PortfolioNameContainer>
        <CloseFormButton onClick={onCloseForm} />
      </TopContainer>
      {formStep === "start" && (
        <SelectPortfolioActionsContainer>
          <Button
            onClick={() => onClickPortfolioActionButton("add-coin")}
            primary="true"
          >
            <RiAddFill style={{ marginRight: "5px" }} /> ADD NEW COIN
          </Button>
          <Button
            onClick={() => onClickPortfolioActionButton("edit-portfolio")}
            style={{ marginLeft: "5px" }}
          >
            <MdModeEdit style={{ marginRight: "5px" }} /> EDIT PORTFOLIO
          </Button>
        </SelectPortfolioActionsContainer>
      )}
      {formStep === "add-coin" && (
        <AddOrEditCoinsForm
          marketCoins={marketCoins}
          onCloseForm={onCloseForm}
          addNewCoinToPortfolio={addNewCoinToPortfolio}
          portfolioCoinOptions={portfolioCoinOptions}
          createPortfolioCoinOptions={createPortfolioCoinOptions}
          setFormStep={setFormStep}
        />
      )}
      {formStep === "edit-portfolio" && (
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
      )}
    </FormContainer>
  );
};

export default PortfolioForm;
