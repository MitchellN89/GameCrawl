import GamesList from "./GamesList";
import { useAllGamesContext } from "../../context/AllGamesProvider";
import useFilteredGames from "../../hooks/useFilteredGames";
import GameFilterResults from "./GameFilterResults";
import { Container } from "@mui/material";
import StoreFiltersBar from "./StoreFiltersBar";

export default function Store() {
  const { allGames } = useAllGamesContext();
  const [filteredGames, handleFilteredGames, resetFilteredGames] =
    useFilteredGames(allGames);

  return (
    <>
      <Container fixed>
        <StoreFiltersBar
          handleFilteredGames={handleFilteredGames}
        ></StoreFiltersBar>
        {filteredGames.filterBy ? (
          <GameFilterResults
            filteredGames={filteredGames}
            resetFilteredGames={resetFilteredGames}
          />
        ) : null}

        <GamesList
          filteredGames={filteredGames}
          handleFilteredGames={handleFilteredGames}
        />
      </Container>
    </>
  );
}
