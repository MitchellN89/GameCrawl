import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FilterButtonContainer from "./FilterButtonContainer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useUserContext } from "../../../context/UserProvider";

export default function GameCard({
  imgUrl,
  title,
  description,
  developer,
  publisher,
  genre,
  platform,
  handleFilteredGames,
  id,
}) {
  const [user, userDispatch] = useUserContext();

  const addBtn = (
    <Button
      variant="contained"
      onClick={() => {
        userDispatch({ type: "addGame", addValue: id });
        console.log("IN BUTTON", id);
      }}
      sx={{ fontSize: "8pt" }}
      size="small"
    >
      <AddCircleOutlineIcon sx={{ marginRight: "5px" }} />
      Collection
    </Button>
  );

  const removeBtn = (
    <Button
      onClick={() => {
        console.log("IN BUTTON", id);
        userDispatch({ type: "removeGame", removeValue: id });
      }}
      sx={{ fontSize: "8pt" }}
      size="small"
      color="error"
    >
      <RemoveCircleOutlineIcon sx={{ marginRight: "5px" }} />
      Collection
    </Button>
  );

  return (
    <Card>
      <CardMedia component="img" alt="green iguana" image={imgUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <FilterButtonContainer
          developer={developer}
          publisher={publisher}
          genre={genre}
          platform={platform}
          handleFilteredGames={handleFilteredGames}
        ></FilterButtonContainer>
      </CardContent>
      <CardActions>
        {user.collections.includes(id) ? removeBtn : addBtn}
      </CardActions>
    </Card>
  );
}
