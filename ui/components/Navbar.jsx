import InputField from "./InputField";
import Logo from "./Logo";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const [avatarPicture, setAvatarPicture] = useState("");
  const fileInputRef = useRef(null);
  const { userDetails } = useContext(UserContext);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPicture(imageUrl);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottom: "2px solid rgb(133, 176, 210)",
        width: "100vw",
        height: "100px",
      }}
    >
      <Logo style={{ height: "200px" }} />
      <InputField
        style={{ color: "rgb(133, 176, 210,0.8)" }}
        type="text"
        label="Search..."
        width="40%"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ position: "relative", width: "60px", height: "60px" }}>
          <Avatar
            sx={{
              height: "100%",
              width: "100%",
              bgcolor: avatarPicture ? "white" : "rgb(133, 176, 210)",
              border: "1px solid darkgray ",
            }}
            alt={userDetails.name}
            src={avatarPicture}
          />
          <Tooltip type="file" title="Edit Picture">
            <EditIcon
              onClick={handleEditClick}
              sx={{
                height: "15px",
                width: "15px",
                position: "absolute",
                bottom: "0",
                right: "0",
                backgroundColor: "white",
                border: "1px solid rgb(133, 176, 210)",
                borderRadius: "4px",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
            />
          </Tooltip>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <Typography>{userDetails.name}</Typography>
      </div>
    </div>
  );
};

export default Navbar;
