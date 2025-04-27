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
  rows,
  multiline,
  maxRows,
}) => {
  return (
    <TextField
      {...(multiline && { multiline })}
      {...(rows && { rows })}
      {...(maxRows && { maxRows })}
      rows={rows}
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
