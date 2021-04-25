import { useContext, useEffect, useState } from "react";
import { MarketCoinsContext } from "../../context/context";
import { Container } from "../../styles/globalStyles";
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
interface WatchListFormProps {
  closeForm: () => void;
}

const WatchListForm: React.FC<WatchListFormProps> = ({ closeForm }) => {
  const [coins, setCoins] = useState<any>([]);
  const [watchList, setWatchList] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    fetchMarketCoins();
  }, [fetchMarketCoins]);

  const coinOptions: any = [];

  if (marketCoins) {
    marketCoins.forEach((coin: MarketCoin) => {
      coinOptions.push(`${coin.name} (${coin.symbol.toUpperCase()})`);
    });
  }

  const isValidateValue = () => {
    const isInOptions = coinOptions.includes(inputValue);
    if (isInOptions) return true;

    return false;
  };

  const onAddCoin = (e: any) => {
    e.preventDefault();
    if (isValidateValue()) {
      const coinSymbol = inputValue.split("(")[1].split(")")[0].toLowerCase();
      setCoins([...coins, { symbol: coinSymbol, name: inputValue }]);
      setInputValue("");
    } else {
      alert("This coin is not supported currently. Please try again.");
      setInputValue("");
    }
  };
  const onSave = (e: any) => {
    e.preventDefault();
    let watchListCoins: any = [];
    for (let i = 0; i < coins.length; i++) {
      marketCoins.forEach((marketCoin) => {
        if (coins[i].symbol === marketCoin.symbol) {
          watchListCoins.push(marketCoin);
        }
      });
    }
    console.log("watchListCoins", watchListCoins);
    setWatchList(watchListCoins);
    closeForm();
  };
  const handleChangeInput = (e: any) => {
    setInputValue(e.target.value);
  };

  console.log("watchList", watchList);
  console.log("coins", coins);
  // console.log(coinsMap);
  // console.log(marketCoins);
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
              onChange={handleChangeInput}
            />
            <datalist id="coins">
              {marketCoins.map((coin) => (
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
              {coins.map((coin: any, index: number) => (
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
