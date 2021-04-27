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
import { MarketCoin } from "../../types/coins";
import { useWatchList } from "../../context/WatchListContext";

const WatchListForm: React.FC = () => {
  const {
    watchList,
    onClickCloseForm,
    addNewCoinToWatchList,
    removeCoinFromWatchList,
    coinOptions,
    createCoinOptions,
    updateCoinOptions,
    removeCoinFromCoinOptions,
    addCoinToCoinOptions,
  } = useWatchList();

  const [inputValue, setInputValue] = useState<string>("");
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);

  useEffect(() => {
    if (marketCoins.length === 0) fetchMarketCoins();
  }, [fetchMarketCoins, marketCoins]);

  useEffect(() => {
    if (coinOptions.length === 0) createCoinOptions(marketCoins);
  }, [marketCoins, coinOptions, createCoinOptions]);

  useEffect(() => {
    updateCoinOptions(watchList, marketCoins);
  }, []);

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
      removeCoinFromCoinOptions(coinSymbol);
      addNewCoinToWatchList(coinSymbol, marketCoins);
      setInputValue("");
    } else {
      alert("This coin is not supported currently. Please try again.");
      setInputValue("");
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onCloseForm = () => {
    onClickCloseForm();
  };

  const onClickDeleteCoin = (e: React.MouseEvent, coinSymbol: string) => {
    e.preventDefault();
    const fullCoin = marketCoins.filter((coin) => coin.symbol === coinSymbol);
    removeCoinFromWatchList(coinSymbol);
    addCoinToCoinOptions(fullCoin[0]);
  };

  // FIXME: coinOptions come back full after add coins
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
                <option
                  key={coin.id}
                  value={`${coin.name} (${coin.symbol.toUpperCase()})`}
                />
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
