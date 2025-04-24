import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const InputFieldPassword = ({
  onChange,
  label,
  value,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <TextField
      onChange={onChange}
      value={value}
      style={{
        width: "300px",
        backgroundColor: "whitesmoke",
        borderRadius: "4px",
      }}
      label={label}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputFieldPassword;
