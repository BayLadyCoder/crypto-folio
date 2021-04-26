import { useContext, useEffect, useState, useMemo } from "react";
import { MarketCoinsContext } from "../../context/MarketCoinsContext";
import { Container, Loading } from "../../styles/globalStyles";
import {
  FormWrapper,
  Form,
  FormLeftContainer,
  FormRightContainer,
  FormTitle,
  AddCoinsInput,
  AddCoinBtn,
  CoinsContainer,
  Coin,
  CoinName,
  DeleteCoinBtn,
  DeleteCoinIcon,
} from "./WatchListForm.styled";
import { Button } from "../../styles/globalStyles";
import { MarketCoin } from "../../Types/coins";
import { useWatchList } from "../../context/WatchListContext";

interface WatchListFormProps {
  closeForm: () => void;
}

const WatchListForm: React.FC<WatchListFormProps> = ({ closeForm }) => {
  const {
    updateWatchList,
    coinOptions,
    tempCoins,
    addNewTempCoins,
    createCoinOptions,
    updateCoinOptions,
  } = useWatchList();

  const [inputValue, setInputValue] = useState<string>("");

  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    if (marketCoins.length === 0) fetchMarketCoins();
  }, [fetchMarketCoins, marketCoins]);

  useEffect(() => {
    if (coinOptions.length === 0) createCoinOptions(marketCoins);
  }, [marketCoins, coinOptions, createCoinOptions]);

  const allCoinOptions = useMemo(() => {
    const options: string[] = [];
    if (marketCoins.length > 0) {
      marketCoins.forEach((coin: MarketCoin) => {
        options.push(`${coin.name} (${coin.symbol.toUpperCase()})`);
      });
    }
    return options;
  }, [marketCoins]);

  const isValidateValue = () => {
    const isInOptions = allCoinOptions.includes(inputValue);
    if (isInOptions) return true;

    return false;
  };
  const onAddCoin = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isValidateValue()) {
      const coinSymbol = inputValue.split("(")[1].split(")")[0].toLowerCase();
      updateCoinOptions(coinSymbol);
      addNewTempCoins({ symbol: coinSymbol, name: inputValue });
      setInputValue("");
    } else {
      alert("This coin is not supported currently. Please try again.");
      setInputValue("");
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = (e: React.MouseEvent) => {
    e.preventDefault();
    updateWatchList(tempCoins, marketCoins);
    closeForm();
  };

  if (marketCoins.length === 0) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <FormWrapper>
        <Form>
          <FormLeftContainer>
            <FormTitle>Add Coins</FormTitle>
            <AddCoinsInput
              type="text"
              list="coins"
              value={inputValue}
              onChange={onChangeInput}
            />
            <datalist id="coins">
              {coinOptions.map((coin) => (
                <option
                  key={coin.id}
                  value={`${coin.name} (${coin.symbol.toUpperCase()})`}
                />
              ))}
            </datalist>
            <AddCoinBtn onClick={onAddCoin}>ADD</AddCoinBtn>
          </FormLeftContainer>
          <FormRightContainer>
            <FormTitle>Your Watchlist</FormTitle>
            <CoinsContainer>
              {tempCoins.map((coin: any, index: number) => (
                <Coin key={index}>
                  <CoinName>{coin.name}</CoinName>
                  <DeleteCoinBtn>
                    <DeleteCoinIcon />
                  </DeleteCoinBtn>
                </Coin>
              ))}
            </CoinsContainer>
            <div style={{ alignSelf: "flex-end" }}>
              <Button type="button" aria-label="Close Form" onClick={closeForm}>
                Cancel
              </Button>
              <Button type="submit" primary="true" onClick={onSave}>
                Save
              </Button>
            </div>
          </FormRightContainer>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default WatchListForm;
