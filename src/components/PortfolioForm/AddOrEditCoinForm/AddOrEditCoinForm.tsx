import { useState, useEffect } from "react";
import { MarketCoin } from "../../../types/coins";
import {
  DetailsContainer,
  BottomContainer,
  AddDetailsForm,
  FormTitle,
} from "./AddOrEditCoinsForm.styled";
import { Button } from "../../../styles/globalStyles";
import { PortfolioCoinBasic } from "../../../types/coins";
import {
  TextFieldWithLabel,
  SearchCoinTextField,
  CurrencyRadioButtons,
} from "../../form_components";

interface Props {
  marketCoins: MarketCoin[];
  onCloseForm: () => void;
  addNewCoinToPortfolio: (
    newData: PortfolioCoinBasic,
    marketCoins: MarketCoin[]
  ) => void;
  portfolioCoinOptions: MarketCoin[];
  createPortfolioCoinOptions: (marketCoins: MarketCoin[]) => void;
  setFormStep: any;
}
const AddOrEditCoinsForm: React.FC<Props> = ({
  marketCoins,
  onCloseForm,
  addNewCoinToPortfolio,
  portfolioCoinOptions,
  createPortfolioCoinOptions,
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
        <Button onClick={() => setFormStep("start")}>BACK</Button>
        <Button onClick={onSave} style={{ marginLeft: "10px" }} primary="true">
          SAVE
        </Button>
      </BottomContainer>
    </DetailsContainer>
  );
};

export default AddOrEditCoinsForm;
