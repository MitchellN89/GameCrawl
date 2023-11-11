import styled from "@emotion/styled";
import { FilterButton } from "./FilterButton";

const StyledContainer = styled("div")(({ theme }) => ({
  textAlign: "right",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginTop: "20px",
}));

export default function FilterButtonContainer({
  developer,
  publisher,
  genre,
  platform,
  handleFilteredGames,
}) {
  return (
    <StyledContainer>
      <FilterButton
        filterBy="developer"
        filterValue={developer}
        onClick={handleFilteredGames}
        colourId="1"
      >
        Developer: {developer}
      </FilterButton>
      <FilterButton
        filterBy="publisher"
        filterValue={publisher}
        onClick={handleFilteredGames}
        colourId="2"
      >
        Publisher: {publisher}
      </FilterButton>
      <FilterButton
        filterBy="genre"
        filterValue={genre}
        onClick={handleFilteredGames}
        colourId="3"
      >
        Genre: {genre}
      </FilterButton>
      <FilterButton
        filterBy="platform"
        filterValue={platform}
        onClick={handleFilteredGames}
        colourId="4"
      >
        Platform: {platform}
      </FilterButton>
    </StyledContainer>
  );
}
