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
        <AddOrEditCoinsForm
          marketCoins={marketCoins}
          onCloseForm={onCloseForm}
          portfolioName={portfolioName}
          updatePortfolioName={updatePortfolioName}
          addNewCoinToPortfolio={addNewCoinToPortfolio}
          portfolioCoinOptions={portfolioCoinOptions}
          createPortfolioCoinOptions={createPortfolioCoinOptions}
          portfolioCoins={portfolioCoins}
          formStep={formStep}
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
                <TableHeadData align="center">Action</TableHeadData>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <TableBodyData align="left">Bitcoin (BTC)</TableBodyData>
                <TableBodyData align="right">2</TableBodyData>
                <TableBodyData align="right">$100,000</TableBodyData>
                <TableBodyData align="center">
                  <RemoveButton>REMOVE</RemoveButton>
                </TableBodyData>
              </tr>
              <tr>
                <TableBodyData align="left">Dogecoin (DOGE)</TableBodyData>
                <TableBodyData align="right">200</TableBodyData>
                <TableBodyData align="right">$120</TableBodyData>
                <TableBodyData align="center">
                  <RemoveButton>REMOVE</RemoveButton>
                </TableBodyData>
              </tr>
            </TableBody>
          </Table>

          <BottomContainer>
            <Button onClick={onCloseForm}>CANCEL</Button>
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

const AddOrEditCoinsForm: React.FC<Props> = ({
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
  const [currency, setCurrency] = useState("");
  const [estimate, setEstimate] = useState(0);
  const [portfolioData, setPortfolioData] = useState<PortfolioCoinBasic>({
    name_with_symbol: "",
    bought_quantity: 0,
    bought_price_per_coin: 0,
    cost_basis: 0,
    total_gain_usd: 0,
    total_gain_percentage: 0,
    current_value: 0,
  });
  const [boughtWithBitcoin, setBoughtWithBitcoin] = useState({
    btc_price_at_bought: 0,
    btc_paid_quantity: 0,
  });

  useEffect(() => {
    const { btc_price_at_bought, btc_paid_quantity } = boughtWithBitcoin;
    if (btc_price_at_bought > 0 && btc_paid_quantity > 0) {
      const costBasis = Number(btc_price_at_bought) * Number(btc_paid_quantity);
      setEstimate(costBasis);
      setPortfolioData((prev) => ({ ...prev, cost_basis: costBasis }));
    }
  }, [boughtWithBitcoin]);

  useEffect(() => {
    if (marketCoins.length > 0 && portfolioCoinOptions.length === 0)
      createPortfolioCoinOptions(marketCoins);
  }, [marketCoins, portfolioCoinOptions.length, createPortfolioCoinOptions]);

  const updatePortfolioData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

  const onSave = (e: React.MouseEvent) => {
    e.preventDefault();
    const { bought_quantity, cost_basis } = portfolioData;

    addNewCoinToPortfolio(
      {
        ...portfolioData,
        bought_quantity: Number(bought_quantity),
        cost_basis: Number(cost_basis),
        bought_price_per_coin: cost_basis / bought_quantity,
      },
      marketCoins
    );
    onCloseForm();
  };
  const onChooseCurrency = (value: string) => {
    setCurrency(value);
  };

  const updateBoughtWithBitcoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoughtWithBitcoin({
      ...boughtWithBitcoin,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <DetailsContainer>
      <AddDetailsForm>
        <FormTitle>Add New Coin</FormTitle>
        <SearchCoinTextField
          value={portfolioData.name_with_symbol}
          name="name_with_symbol"
          handleChange={updatePortfolioData}
          coins={portfolioCoinOptions}
          hasLabel
        />
        <TextFieldWithLabel
          label="Quantity"
          name="bought_quantity"
          placeholder="How many coins do you have?"
          value={portfolioData.bought_quantity}
          handleChange={updatePortfolioData}
        />

        {portfolioData.name_with_symbol === "Bitcoin (BTC)" && (
          <TextFieldWithLabel
            label="Total Cost ($)"
            name="cost_basis"
            placeholder="Price you paid for this transaction"
            value={portfolioData.cost_basis}
            handleChange={updatePortfolioData}
          />
        )}

        {portfolioData.name_with_symbol &&
          portfolioData.name_with_symbol !== "Bitcoin (BTC)" && (
            <CurrencyRadioButtons onChooseCurrency={onChooseCurrency} />
          )}

        {portfolioData.name_with_symbol !== "Bitcoin (BTC)" &&
        currency &&
        currency === "USD" ? (
          <TextFieldWithLabel
            label="Total Cost ($)"
            name="cost_basis"
            placeholder="Price you paid for this transaction"
            value={portfolioData.cost_basis}
            handleChange={updatePortfolioData}
          />
        ) : currency === "BTC" ? (
          <>
            <TextFieldWithLabel
              label="Bitcoin Price ($)"
              name="btc_price_at_bought"
              placeholder="BTC price when bought this coin"
              value={boughtWithBitcoin.btc_price_at_bought}
              handleChange={updateBoughtWithBitcoin}
            />
            <TextFieldWithLabel
              label="Total Bitcoin Paid (₿)"
              name="btc_paid_quantity"
              placeholder="BTC quantity spent on this transaction"
              value={boughtWithBitcoin.btc_paid_quantity}
              handleChange={updateBoughtWithBitcoin}
            />
            {estimate > 0 && (
              <p
                style={{
                  width: "250px",
                  alignSelf: "start",
                  fontSize: "13px",
                }}
              >
                estimate total cost basis ~ ${estimate}
              </p>
            )}
          </>
        ) : null}
      </AddDetailsForm>
      <BottomContainer>
        <Button onClick={onCloseForm}>CANCEL</Button>
        <Button onClick={onSave} style={{ marginLeft: "10px" }} primary="true">
          SAVE
        </Button>
      </BottomContainer>
    </DetailsContainer>
  );
};

export default PortfolioForm;
