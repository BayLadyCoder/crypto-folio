import { useContext, useEffect, useState } from 'react';
import { MarketCoinsContext } from '../../context/MarketCoins/MarketCoinsContext';
import { Container, Loading } from '../../styles/globalStyles';
import {
  Form,
  FormLeftContainer,
  FormRightContainer,
  FormTitle,
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
} from './WatchListForm.styled';
import { Button } from '../../styles/globalStyles';
import { MarketCoin } from '../../types/coins';
import { useWatchList } from '../../context/WatchList/WatchListContext';
import { AiOutlineRight } from 'react-icons/ai';
import { SearchCoinTextField } from '../form_components';
interface Props {
  watchListName: string;
  updateWatchListName: (newName: string) => void;
}
const WatchListForm: React.FC<Props> = ({
  watchListName,
  updateWatchListName,
}) => {
  const {
    watchList,
    onClickCloseForm,
    addNewCoinToWatchList,
    removeCoinFromWatchList,
    coinOptions,
    createCoinOptions,
  } = useWatchList();

  const [inputValue, setInputValue] = useState<string>('');

  const [thisWatchListName, setThisWatchListName] =
    useState<string>(watchListName);
  const [watchListNameInputOpen, setWatchListNameInputOpen] =
    useState<boolean>(false);
  const { marketCoins, fetchMarketCoins } = useContext(MarketCoinsContext);

  useEffect(() => {
    const getCoins = async () => {
      const coins = await fetchMarketCoins();
      createCoinOptions(coins);
    };

    if (marketCoins.length === 0) getCoins();
  }, []);

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

  const onChangeWatchListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThisWatchListName(e.target.value);
  };
  const onClickSaveWatchListName = (e: React.MouseEvent) => {
    e.preventDefault();
    updateWatchListName(thisWatchListName);
    setWatchListNameInputOpen(false);
  };

  if (marketCoins.length === 0 || coinOptions.length === 0)
    return <Loading>Loading...</Loading>;

  return (
    <Container alignCenter>
      <Form>
        <FormLeftContainer>
          <FormHeaderContainer>
            <FormTitle>Add Coins</FormTitle>
            <CloseFormButtonLeft
              type='button'
              aria-label='Close Form'
              onClick={onCloseForm}
            >
              X
            </CloseFormButtonLeft>
          </FormHeaderContainer>
          <SearchCoinTextField
            value={inputValue}
            name='coins'
            handleChange={onChangeInput}
            coins={coinOptions}
          />

          <Button primary='true' onClick={onAddCoin}>
            ADD TO WATCHLIST{' '}
            <AiOutlineRight style={{ marginLeft: '5px', fontSize: '20px' }} />
          </Button>
        </FormLeftContainer>
        <FormRightContainer>
          <FormHeaderContainer>
            <WatchListNameWrapper>
              {watchListNameInputOpen ? (
                <>
                  <input
                    type='text'
                    value={thisWatchListName}
                    onChange={onChangeWatchListName}
                  />
                  <button onClick={(e) => onClickSaveWatchListName(e)}>
                    save
                  </button>{' '}
                </>
              ) : (
                <>
                  <FormTitle>{thisWatchListName}</FormTitle>
                  <EditWatchListNameButton
                    type='button'
                    aria-label='Edit Watchlist Name'
                    onClick={() => setWatchListNameInputOpen(true)}
                  />
                </>
              )}
            </WatchListNameWrapper>
            <CloseFormButton
              type='button'
              aria-label='Close Form'
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
    </Container>
  );
};

export default WatchListForm;
