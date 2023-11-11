import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ControlButtons from "./ControlButtons";
import GameDetails from "./GameDetails";
import GameSpecs from "./GameSpecs";

const ContentContainer = styled("div")(({}) => ({
  padding: "20px",
}));

const GameFeatureContainer = styled("div")(({}) => ({
  marginLeft: "300px",
}));

const GameFeatureImg = styled("img")(({}) => ({
  width: "100%",
  maxHeight: "300px",
  objectFit: "cover",
}));

export default function GameFeature({ currentGame, setCurrentGameId }) {
  console.log("Current Game: ", currentGame);
  return (
    <GameFeatureContainer>
      <GameFeatureImg src={currentGame.thumbnail}></GameFeatureImg>

      <ContentContainer>
        <Typography variant="h4">{currentGame.title}</Typography>
        <ControlButtons
          id={currentGame.id}
          setCurrentGameId={setCurrentGameId}
        />
        <GameDetails
          description={currentGame.description}
          genre={currentGame.genre}
          platform={currentGame.platform}
          publisher={currentGame.publisher}
          developer={currentGame.developer}
          releaseDate={currentGame.release_date}
        />

        <GameSpecs {...currentGame.minimum_system_requirements} />
      </ContentContainer>
    </GameFeatureContainer>
  );
}
