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
  CoinsContainer,
  Coin,
  CoinName,
  DeleteCoinBtn,
  DeleteCoinIcon,
  CloseFormButtonLeft,
  CloseFormButton,
  FormHeaderContainer,
  WatchListNameWrapper,
  EditWatchListNameButton,
} from "./WatchListForm.styled";
import { Button } from "../../styles/globalStyles";
import { MarketCoin } from "../../types/coins";
import { useWatchList } from "../../context/WatchList/WatchListContext";
import { AiOutlineRight } from "react-icons/ai";

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

  useEffect(() => {
    if (marketCoins.length > 0 && coinOptions.length === 0)
      createCoinOptions(marketCoins);
  }, [marketCoins, coinOptions.length, createCoinOptions]);

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

  if (marketCoins.length === 0) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <FormWrapper>
        <Form>
          <FormLeftContainer>
            <FormHeaderContainer>
              <FormTitle>Add Coins</FormTitle>
              <CloseFormButtonLeft
                type="button"
                aria-label="Close Form"
                onClick={onCloseForm}
              >
                X
              </CloseFormButtonLeft>
            </FormHeaderContainer>
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
            <Button primary="true" onClick={onAddCoin}>
              ADD TO WATCHLIST{" "}
              <AiOutlineRight style={{ marginLeft: "5px", fontSize: "20px" }} />
            </Button>
          </FormLeftContainer>
          <FormRightContainer>
            <FormHeaderContainer>
              <WatchListNameWrapper>
                <FormTitle>Your Watchlist</FormTitle>
                <EditWatchListNameButton
                  type="button"
                  aria-label="Edit Watchlist Name"
                  onClick={() => console.log("edit watchlist name")}
                />
              </WatchListNameWrapper>
              <CloseFormButton
                type="button"
                aria-label="Close Form"
                onClick={onCloseForm}
              />
            </FormHeaderContainer>
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
