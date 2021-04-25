import { useContext, useEffect, useState } from "react";
import { MarketCoinsContext } from "../../context/context";
import { TiDelete } from "react-icons/ti";

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

const WatchListForm = () => {
  const [watchList, setWatchList] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);
  useEffect(() => {
    fetchMarketCoins();
  }, [fetchMarketCoins]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputValue);
    setWatchList([...watchList, { name: inputValue }]);
    setInputValue("");
  };
  const handleChangeInput = (e: any) => {
    console.log("input", e.target.value);
    setInputValue(e.target.value);
  };

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
            <AddCoinBtn type="submit" onClick={onSubmit}>
              ADD
            </AddCoinBtn>
          </FormLeftContainer>
          <FormRightContainer>
            <FormTitle>Your Watchlist</FormTitle>
            <CoinsContainer>
              {watchList.map((coin: any, index: number) => (
                <Coin>
                  <CoinName key={index}>{coin.name}</CoinName>
                  <DeleteCoinBtn>
                    <DeleteCoinIcon />
                  </DeleteCoinBtn>
                </Coin>
              ))}
            </CoinsContainer>
            <div style={{ alignSelf: "flex-end" }}>
              <Button>Cancel</Button>
              <Button primary="true">Save</Button>
            </div>
          </FormRightContainer>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default WatchListForm;
