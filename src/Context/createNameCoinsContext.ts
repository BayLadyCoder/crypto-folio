import { useState, useCallback } from "react";
import { NameCoin } from "../Types/coins";
import axios from "axios";

const CreateNameCoinsContext = () => {
  const [nameCoins, setNameCoins] = useState<NameCoin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNameCoins = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list"
      );
      setNameCoins(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [setNameCoins]);

  return { nameCoins, setNameCoins, isLoading, fetchNameCoins };
};
export default CreateNameCoinsContext;
