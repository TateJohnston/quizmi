import { Button, Box } from "@mui/material";
import { useState } from "react";

const Buttons = ({
  display,
  onClick,
  variant,
  content,
  backgroundColor = "whitesmoke",
  color = "rgb(133, 176, 210)",
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
      }}
    >
      {content}
    </Button>
  );
};

export default Buttons;
