import { SearchBar } from "@cred/neopop-web/lib/components";
import { colorGuide } from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const SearchInputField = () => {
  const handleChange = (value) => {
    console.log("Search query: ", value);
  };
  const handleSubmit = () => {
    console.log("Search query submitted");
  };

  return (
    <ContentWrapper>
      <SearchBar
        iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
        placeholder="search query here"
        colorConfig={colorGuide.lightComponents.searchBar}
        inputColorConfig={colorGuide.lightComponents.inputFields}
        handleSearchInput={handleChange}
        onSubmit={handleSubmit}
      />
    </ContentWrapper>
  );
};

export default SearchInputField;
