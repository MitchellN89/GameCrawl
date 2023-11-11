import { Button } from "@mui/material";
import { useFormInput } from "../../hooks/useFormInput";
import FormInput from "../Global/FormInput";
import styled from "@emotion/styled";

const StoreFiltersBarForm = styled("form")(() => ({
  width: "100%",
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export default function StoreFiltersBar({ handleFilteredGames }) {
  const [searchControl, resetSearchControl] = useFormInput("");
  return (
    <StoreFiltersBarForm
      onSubmit={(evt) => {
        evt.preventDefault();
        handleFilteredGames("title", searchControl.value);
        resetSearchControl();
      }}
    >
      <FormInput
        label="Search Titles"
        id="inputSearch"
        type="text"
        value={searchControl.value}
        onChange={searchControl.onChange}
        width="300px"
      ></FormInput>
      <Button sx={{ marginLeft: "10px" }} variant="contained" type="submit">
        Search
      </Button>
    </StoreFiltersBarForm>
  );
}
