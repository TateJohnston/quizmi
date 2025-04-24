import HomePageButtons from "../components/HomePageButtons";
import InputField from "../components/InputField";
import InputFieldPassword from "../components/InputFieldPassword";
import Logo from "../components/Logo";
import { useState } from "react";

import { Box } from "@mui/material";

const HomePage = () => {
  const [signUp, setSignUp] = useState(false);
  const [accountVerified, setAccountVerified] = useState(false);

  let emailValue = "";
  let passwordValue = "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "beige",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "50%",
          backgroundColor: "whitesmoke",
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
          <InputField
            label="Email"
            type="email"
            onChange={(e) => (emailValue = e.target.value)}
          />
          <InputFieldPassword label={"Password"} />
          {signUp ? <InputFieldPassword label={"Re-type Password"} /> : ""}
        </div>
        <HomePageButtons
          accountVerified={accountVerified}
          setAccountVerified={setAccountVerified}
          signUp={signUp}
          setSignUp={setSignUp}
        />
      </div>
    </div>
  );
};

export default HomePage;
