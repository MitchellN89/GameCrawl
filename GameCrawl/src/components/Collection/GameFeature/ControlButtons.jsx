import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import styled from "@emotion/styled";
import { useUserContext } from "../../../context/UserProvider";

const ContentContainer = styled("div")(() => ({
  margin: "10px auto 20px",
}));

export default function ControlButtons({ id, setCurrentGameId }) {
  const [user, userDispatch] = useUserContext();

  return (
    <ContentContainer>
      <Button size="small" variant="contained" sx={{ marginRight: "5px" }}>
        Launch Game
      </Button>
      <Button
        onClick={() => {
          userDispatch({ type: "removeGame", removeValue: id });
          setCurrentGameId(null);
        }}
        sx={{ fontSize: "8pt" }}
        size="small"
        color="error"
      >
        <RemoveCircleOutlineIcon sx={{ marginRight: "5px" }} />
        Collection
      </Button>
    </ContentContainer>
  );
}
