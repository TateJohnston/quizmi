import { Button, Box } from "@mui/material";
import { useState } from "react";

const Buttons = ({
  display,
  onClick,
  variant,
  content,
  backgroundColor = "whitesmoke",
  color = "rgb(133, 176, 210)",
  width,
  marginTop,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={{
        backgroundColor: { backgroundColor },
        color: { color },
        fontWeight: "bold",
        display: { display },
        width: { width },
        marginTop: { marginTop },
      }}
    >
      {content}
    </Button>
  );
};

export default Buttons;
