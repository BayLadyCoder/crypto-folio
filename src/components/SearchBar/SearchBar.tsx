import {
  Wrapper,
  SearchInput,
  SearchBtn,
  SearchIcon,
} from "./SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="Search" type="text" />{" "}
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </Wrapper>
  );
};

export default SearchBar;
