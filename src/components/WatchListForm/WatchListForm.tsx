import { useContext, useEffect, useState } from "react";
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
import { MarketCoin } from "../../types/coins";
import { useWatchList } from "../../context/WatchList/WatchListContext";

const WatchListForm: React.FC = () => {
  const {
    watchList,
    onClickCloseForm,
    addNewCoinToWatchList,
    removeCoinFromWatchList,
    coinOptions,
    createCoinOptions,
  } = useWatchList();

  const [inputValue, setInputValue] = useState<string>("");
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);

  useEffect(() => {
    const getCoins = async () => {
      const coins = await fetchMarketCoins();
      createCoinOptions(coins);
    };

    if (marketCoins.length === 0) getCoins();
  }, [fetchMarketCoins, marketCoins.length, createCoinOptions]);

  const onAddCoin = (e: React.MouseEvent) => {
    e.preventDefault();
    addNewCoinToWatchList(marketCoins, coinOptions, inputValue, setInputValue);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onCloseForm = () => {
    onClickCloseForm();
  };

  const onClickDeleteCoin = (e: React.MouseEvent, coinSymbol: string) => {
    e.preventDefault();
    removeCoinFromWatchList(coinSymbol, marketCoins);
  };

  // TODO: Add Crypto Table to WatchList according to watchList data

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
                <option key={coin} value={coin} />
              ))}
            </datalist>
            <AddCoinBtn onClick={onAddCoin}>ADD TO WATCHLIST {">"}</AddCoinBtn>
          </FormLeftContainer>
          <FormRightContainer>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FormTitle>Your Watchlist</FormTitle>
              <Button
                type="button"
                aria-label="Close Form"
                onClick={onCloseForm}
              >
                X
              </Button>
            </div>
            <CoinsContainer>
              {watchList.map((coin: MarketCoin) => (
                <Coin key={coin.id}>
                  <CoinName>{`${
                    coin.name
                  } (${coin.symbol.toUpperCase()})`}</CoinName>
                  <DeleteCoinBtn
                    onClick={(e) => onClickDeleteCoin(e, coin.symbol)}
                  >
                    <DeleteCoinIcon />
                  </DeleteCoinBtn>
                </Coin>
              ))}
            </CoinsContainer>
          </FormRightContainer>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default WatchListForm;
