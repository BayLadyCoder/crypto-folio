import { useState, useCallback } from "react";
import { MarketCoin } from "../Types/coins";
import axios from "axios";

const CreateMarketCoinsContext = () => {
  const [marketCoins, setMarketCoins] = useState<MarketCoin[]>([]);
  const [marketCoins100, setMarketCoins100] = useState<MarketCoin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMarketCoins = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      );
      setMarketCoins(res.data);
      setMarketCoins100(res.data.splice(100));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [setMarketCoins]);

  return {
    marketCoins,
    setMarketCoins,
    marketCoins100,
    setMarketCoins100,
    isLoading,
    fetchMarketCoins,
  };
};
export default CreateMarketCoinsContext;