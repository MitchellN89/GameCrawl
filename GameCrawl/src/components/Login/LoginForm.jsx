import { useFormInput } from "../../hooks/useFormInput";
import { Typography, Button, Container } from "@mui/material";
import { useUserContext } from "../../context/UserProvider";
import FormInput from "../Global/FormInput";
import styled from "@emotion/styled";

const Form = styled("form")(() => ({
  width: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export default function LoginForm() {
  const [emailControls] = useFormInput("");
  const [passwordControls] = useFormInput("");
  const [user, userDispatch] = useUserContext();

  function handleSubmit(evt) {
    evt.preventDefault();

    const formData = {
      userEmail: emailControls.value,
      userPassword: passwordControls.value,
    };
    userDispatch({ type: "login", values: formData });
  }

  return (
    <Container fixed sx={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Typography sx={{ margin: "120px 0 10px" }} variant="h2">
          Game Crawl Login
        </Typography>
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="Email Address"
            id="input-email"
            type="text"
            {...emailControls}
          ></FormInput>
          <FormInput
            label="Password"
            id="input-password"
            type="password"
            {...passwordControls}
          ></FormInput>
          <StyledButtonContainer>
            <Button sx={{ marginTop: "12px" }}>Create Account</Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "12px" }}
            >
              Sign In
            </Button>
          </StyledButtonContainer>
        </Form>
      </div>
    </Container>
  );
}
