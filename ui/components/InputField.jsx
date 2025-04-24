import { TextField } from "@mui/material";

const InputField = ({ endAdornment, onChange, label, variant, type }) => {
  return (
    <TextField
      onChange={onChange}
      style={{
        width: "300px",
        backgroundColor: "whitesmoke",
        borderRadius: "4px",
      }}
      label={label}
      variant={variant}
      type={type}
    ></TextField>
  );
};

export default InputField;
