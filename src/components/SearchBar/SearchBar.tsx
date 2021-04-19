import { useContext } from "react";
import { Wrapper, SearchInput } from "./SearchBar.styled";
import { MarketCoinsContext } from "../../Context/context";

const SearchBar: React.FC = () => {
  const { marketCoins } = useContext(MarketCoinsContext);

  return (
    <Wrapper>
      <SearchInput list="browsers" placeholder="Search" type="text" />{" "}
      <datalist id="browsers">
        {marketCoins.map((coin) => (
          <option key={coin.id} value={`${coin.name} (${coin.symbol})`} />
        ))}
      </datalist>
    </Wrapper>
  );
};

export default SearchBar;
