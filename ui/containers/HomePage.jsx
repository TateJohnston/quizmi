import Button from "../components/Buttons";
import InputField from "../components/InputField";
import Logo from "../components/Logo";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { InputAdornment, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { PageContext, PageProvider } from "../context/PageContext";
import { useContext } from "react";

import { Box, Input } from "@mui/material";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  const [signUp, setSignUp] = useState(false);
  const [accountVerified, setAccountVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [signUpCredentialsOkay, setSignUpCredentialsOkay] = useState(null);
  const [userCreatedSuccessful, setUserCreatedSuccessful] = useState(null);

  const { logIn } = useContext(PageContext);
  const { setUserDetails } = useContext(UserContext);

  const signUpCredentialsCheck = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(emailValue);
    if (nameValue && validEmail && passwordValue === passwordConfirmValue) {
      setSignUpCredentialsOkay(true);
      createNewUser(nameValue, emailValue, passwordValue);
    } else {
      setSignUpCredentialsOkay(false);
    }
  };

  const createNewUser = (userName, userEmail, userPassword) => {
    const userObject = {
      name: userName,
      email: userEmail,
      password: userPassword,
      id: "",
    };
    axios
      .post("http://localhost:3000/users", userObject)
      .then((response) => {
        if (response.status === 201) {
          resetValues();
          setUserCreatedSuccessful(true);
        }
      })
      .catch((error) => console.error("error", error));
  };

  const resetValues = () => {
    setEmailValue("");
    setPasswordValue("");
    setPasswordConfirmValue("");
  };

  const verifyAccountForLogIn = () => {
    axios
      .get(`http://localhost:3000/users/?${emailValue}`)
      .then((response) => {
        const data = response.data;

        const matchedUser = data.find(
          (users) =>
            users.email === emailValue && users.password === passwordValue
        );
        if (matchedUser) {
          setSignUpCredentialsOkay(true);
          logIn();
          setUserDetails(matchedUser);
        } else {
          setSignUpCredentialsOkay(false);
        }
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "50%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo style={{ width: "600px" }} />
      </div>
      <div
        style={{
          height: "100%",
          width: "50%",
          backgroundColor: "rgb(173, 216, 230)",
          borderLeft: "2px solid darkgray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "300px",
          }}
        >
          <Typography
            style={{
              display: userCreatedSuccessful === true ? "flex" : "none",
              margin: "auto",
              color: "Green",
              fontWeight: "bold",
            }}
          >
            User Created Successfully
          </Typography>
          <Typography
            style={{
              display: signUpCredentialsOkay === false ? "flex" : "none",
              margin: "auto",
              color: "red",
            }}
          >
            Email or Password invalid
          </Typography>
          {userCreatedSuccessful !== true && (
            <>
              {signUp ? (
                <InputField
                  width={"300px"}
                  label={"Name"}
                  type={"text"}
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              ) : (
                ""
              )}
              <InputField
                width={"300px"}
                label="Email"
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <InputField
                width={"300px"}
                label="Password"
                type={showPassword ? "text" : "password"}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {signUp ? (
                <InputField
                  width={"300px"}
                  label={"Re-type Password"}
                  type={showPassword ? "text" : "password"}
                  value={passwordConfirmValue}
                  onChange={(e) => setPasswordConfirmValue(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              ) : (
                ""
              )}
            </>
          )}
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "300px",
          }}
        >
          <Button
            onClick={verifyAccountForLogIn}
            display={signUp ? "none" : "flex"}
            variant={"contained"}
            content={"Log In"}
          />

          <Button
            color="whitesmoke"
            backgroundColor=""
            variant={"contained"}
            content={"Sign Up"}
            onClick={() => setSignUp(true)}
            display={signUp ? "none" : "flex"}
          />
          {userCreatedSuccessful !== true && (
            <Button
              onClick={signUpCredentialsCheck}
              color="whitesmoke"
              backgroundColor=""
              variant={"contained"}
              content={"Sign Up"}
              display={signUp ? "flex" : "none"}
            />
          )}

          <Button
            onClick={() => {
              setSignUp(false);
              setUserCreatedSuccessful(null);
              resetValues();
            }}
            display={signUp ? "flex" : "none"}
            variant={"contained"}
            content={"Back to Log In"}
          />
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
