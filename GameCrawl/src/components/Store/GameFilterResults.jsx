import styled from "@emotion/styled";
import { Typography } from "@mui/material";

function firstLetterUpperCase(string) {
  return string ? string[0].toUpperCase() + string.slice(1) : null;
}

const ResetFilterButton = styled("span")(({ theme }) => ({
  color: "rgb(10, 10, 90)",
  fontFamily: "Roboto",
  fontSize: "12pt",
  fontWeight: "500",
  fontStyle: "italic",
  cursor: "pointer",
  "&:hover": {
    color: "rgb(70, 70, 150)",
  },
}));

export default function GameFilterResults({
  filteredGames,
  resetFilteredGames,
}) {
  return (
    <>
      <Typography variant="h5">
        {`Results for ${firstLetterUpperCase(filteredGames.filterBy)}: ${
          filteredGames.value
        } | ${filteredGames.data.length} Found.`}
      </Typography>
      <ResetFilterButton onClick={resetFilteredGames}>
        Reset Filters
      </ResetFilterButton>
    </>
  );
}
