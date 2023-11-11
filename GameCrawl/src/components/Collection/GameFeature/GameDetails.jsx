import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Bold = styled("b")(() => ({
  fontWeight: "500",
}));

export default function GameDetails({
  description,
  genre,
  platform,
  publisher,
  developer,
  releaseDate,
}) {
  return (
    <div>
      <Typography variant="body2" mb={2}>
        {description}
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        <Bold>Genre: </Bold>
        {genre}
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        <Bold>Platform: </Bold>
        {platform}
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        <Bold>Publisher: </Bold>
        {publisher}
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        <Bold>Developer: </Bold>
        {developer}
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        <Bold>Release Date: </Bold>
        {releaseDate}
      </Typography>
    </div>
  );
}
