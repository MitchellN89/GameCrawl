import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const colours = {
  1: ["rgb(10, 10, 90)", "rgb(40, 40, 90)"],
  2: ["rgb(40, 40, 120)", "rgb(60, 60, 120)"],
  3: ["rgb(70, 70, 150)", "rgb(50, 50, 150)"],
  4: ["rgb(100, 100, 180)", "rgb(80, 80, 180)"],
};

const StyledButton = styled("span")(({ theme, colourId }) => ({
  color: "white",
  backgroundColor: colours[colourId][0],
  "&:hover": {
    backgroundColor: colours[colourId][1],
  },
  cursor: "pointer",
  fontFamily: "Roboto",
  fontSize: "8pt",
  fontWeight: "500",
  display: "inline-block",
  padding: "5px 10px",
  borderRadius: "15px 30px",
  "&:not(:last-of-type)": {
    marginBottom: "2px",
  },
}));

export function FilterButton({
  colourId,
  children,
  filterBy,
  filterValue,
  onClick,
}) {
  return (
    <StyledButton
      colourId={colourId}
      onClick={() => {
        onClick(filterBy, filterValue);
      }}
    >
      {children}
    </StyledButton>
  );
}
