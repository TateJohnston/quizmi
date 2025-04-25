import { TextField } from "@mui/material";

const InputField = ({
  value,
  onChange,
  label,
  variant,
  type,
  InputProps,
  display,
  width,
  backgroundColor = "whitesmoke",
  marginTop,
  helperText,
}) => {
  return (
    <TextField
      helperText={helperText}
      value={value}
      onChange={onChange}
      style={{
        display: display,
        width: width,
        backgroundColor: backgroundColor,
        marginTop: marginTop,
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
