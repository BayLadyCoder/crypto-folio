import { useEffect, useState } from "react";
import { Wrapper, SearchInput } from "./SearchBar.styled";
import axios from "axios";
import { NameCoin } from "../../Types/coins";

const SearchBar: React.FC = () => {
  const [coins, setCoins] = useState<NameCoin[]>([]);

  useEffect(() => {
    const fetchCoinNames = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list"
      );

      setCoins(res.data);
    };

    // fetchCoinNames();
  }, []);

  console.log(coins);

  return (
    <Wrapper>
      <SearchInput list="browsers" placeholder="Search" type="text" />{" "}
      <datalist id="browsers">
        {coins.map((coin) => (
          <option key={coin.id} value={`${coin.name} (${coin.symbol})`} />
        ))}
      </datalist>
    </Wrapper>
  );
};

export default SearchBar;
