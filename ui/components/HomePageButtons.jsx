import { Button, Box } from "@mui/material";
import { useState } from "react";

const HomePageButtons = ({
  accountVerified,
  setAccountVerified,
  signUp,
  setSignUp,
}) => {
  const signUpPage = () => {
    setSignUp(true);
  };
  const backToLogIn = () => {
    setSignUp(false);
  };

  const verifyAccount = () => {
    const emailValue = "";
    const passwordValue = "";
    emailValue && passwordValue
      ? console.log("values")
      : console.log("email or password incorrect");
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "300px",
      }}
    >
      {signUp ? (
        ""
      ) : (
        <Button
          onClick={verifyAccount}
          variant="contained"
          sx={{
            backgroundColor: "whitesmoke",
            color: "rgb(133, 176, 210)",
            fontWeight: "bold",
          }}
        >
          Log In
        </Button>
      )}

      <Button
        onClick={signUpPage}
        variant="contained"
        sx={{
          fontWeight: "bold",
        }}
      >
        Sign Up
      </Button>
      {signUp ? (
        <Button
          onClick={backToLogIn}
          variant="contained"
          sx={{
            backgroundColor: "whitesmoke",
            color: "rgb(133, 176, 210)",
            fontWeight: "bold",
          }}
        >
          Back to Log In
        </Button>
      ) : (
        ""
      )}
    </Box>
  );
};

export default HomePageButtons;
