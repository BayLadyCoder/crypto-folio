import { Container } from "../../styles/globalStyles";
import {
  Wrapper,
  SearchInput,
  SearchBtn,
  SearchIcon,
} from "./SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <SearchInput placeholder="Search" type="text" />{" "}
        <SearchBtn>
          <SearchIcon />
        </SearchBtn>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
