import { useContext } from "react";
import { Wrapper, SearchInput } from "./SearchBar.styled";
import { MarketCoinsContext } from "../../context/context";

const SearchBar: React.FC = () => {
  const { marketCoins } = useContext(MarketCoinsContext);

  return (
    <Wrapper>
      <SearchInput list="coins" placeholder="Search" type="text" />
      <datalist id="coins">
        {marketCoins.map((coin) => (
          <option
            key={coin.id}
            value={`${coin.name} (${coin.symbol.toUpperCase()})`}
          />
        ))}
      </datalist>
    </Wrapper>
  );
};

export default SearchBar;
