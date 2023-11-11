import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Bold = styled("b")(() => ({
  fontWeight: "500",
}));

export default function GameSpecs({
  os,
  processor,
  memory,
  graphics,
  storage,
}) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h5">Minimum System Requirements</Typography>
      <Typography variant="body2">
        <Bold>Operating System: </Bold>
        {os}
      </Typography>
      <Typography variant="body2">
        <Bold>Processes: </Bold>
        {processor}
      </Typography>
      <Typography variant="body2">
        <Bold>Memory: </Bold>
        {memory}
      </Typography>
      <Typography variant="body2">
        <Bold>Graphics: </Bold>
        {graphics}
      </Typography>
      <Typography variant="body2">
        <Bold>Storage: </Bold>
        {storage}
      </Typography>
    </div>
  );
}
