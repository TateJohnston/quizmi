import { TextField } from "@mui/material";

const InputField = ({
  value,
  onChange,
  label,
  variant,
  type,
  InputProps,
  display,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      style={{
        display: { display },
        width: "300px",
        backgroundColor: "whitesmoke",
        borderRadius: "4px",
      }}
      label={label}
      variant={variant}
      type={type}
      InputProps={InputProps}
    ></TextField>
  );
};

export default InputField;
