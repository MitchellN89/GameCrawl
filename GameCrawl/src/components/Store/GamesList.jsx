import GameCard from "./GameCards/GameCard";
import * as React from "react";
import Grid from "@mui/material/Grid";

export default function GamesList({ filteredGames, handleFilteredGames }) {
  return (
    <Grid mt={2} container spacing={2}>
      {filteredGames
        ? filteredGames.data.map((game) => {
            const {
              id,
              title,
              thumbnail,
              short_description,
              developer,
              genre,
              publisher,
              platform,
            } = game;
            return (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                <GameCard
                  title={title}
                  imgUrl={thumbnail}
                  description={short_description}
                  publisher={publisher}
                  developer={developer}
                  genre={genre}
                  platform={platform}
                  handleFilteredGames={handleFilteredGames}
                  id={id}
                ></GameCard>
              </Grid>
            );
          })
        : null}
    </Grid>
  );
}
