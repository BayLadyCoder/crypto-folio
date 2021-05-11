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
import AddOrEditCoinForm from "./AddOrEditCoinForm";
import EditPortfolioForm from "./EditPortfolioForm";
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
        <AddOrEditCoinForm
          marketCoins={marketCoins}
          onCloseForm={onCloseForm}
          addNewCoinToPortfolio={addNewCoinToPortfolio}
          portfolioCoinOptions={portfolioCoinOptions}
          createPortfolioCoinOptions={createPortfolioCoinOptions}
          setFormStep={setFormStep}
        />
      )}
      {formStep === "edit-portfolio" && (
        <EditPortfolioForm setFormStep={setFormStep} />
      )}
    </FormContainer>
  );
};

export default PortfolioForm;
