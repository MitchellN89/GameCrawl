import styled from "@emotion/styled";
import CollectionNavListItem from "./CollectionNavListItem";
import { Typography } from "@mui/material";
import { useAllGamesContext } from "../../context/AllGamesProvider";
import useFilteredGames from "../../hooks/useFilteredGames";
import { useEffect } from "react";

const CollectionNavBarContainer = styled("div")(() => ({
  width: "300px",
  height: "calc(100vh - 56px)",
  position: "fixed",
  top: "56px",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
  textAlign: "center",
  borderRight: "1px solid rgb(230, 230, 230)",
}));

export default function CollectionNavBar({
  currentGameId,
  user,
  setCurrentGameId,
}) {
  const { allGames } = useAllGamesContext();
  const [filteredGames, handleFilteredGames] = useFilteredGames(allGames);

  useEffect(() => {
    handleFilteredGames("id", ...user.collections);
    setCurrentGameId(user.collections[0]);
  }, [user]);

  return (
    <CollectionNavBarContainer>
      <Typography variant="body2" mt={2} px={2} py={1} fontWeight={"bold"}>
        My Games
      </Typography>
      {filteredGames
        ? filteredGames.data.map((game) => {
            return (
              <CollectionNavListItem
                currentGameId={currentGameId}
                key={game.id}
                title={game.title}
                imgUrl={game.thumbnail}
                id={game.id}
                setCurrentGameId={setCurrentGameId}
              ></CollectionNavListItem>
            );
          })
        : null}
    </CollectionNavBarContainer>
  );
}
