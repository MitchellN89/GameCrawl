import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const ListItem = styled("div")(({ currentGameId, id }) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: currentGameId == id ? "rgb(120, 120, 200)" : "none",
  color: currentGameId == id ? "white" : "black",

  "&:hover": {
    backgroundColor: "rgb(80, 80, 180)",
    color: "white",
  },
  "&:not(:last-child)": {
    marginBottom: "5px",
  },
  "&:first-child": {
    marginTop: "50px",
  },
}));

const StyledImg = styled("img")(({}) => ({
  height: "100%",
  marginLeft: "10px",
}));

export default function CollectionNavListItem({
  title,
  imgUrl,
  id,
  setCurrentGameId,
  currentGameId,
}) {
  return (
    <ListItem
      onClick={() => {
        setCurrentGameId(id);
      }}
      id={id}
      currentGameId={currentGameId}
    >
      <StyledImg src={imgUrl} alt={title}></StyledImg>
      <Typography variant="body2" ml={2} textAlign={"left"}>
        {title}
      </Typography>
    </ListItem>
  );
}
