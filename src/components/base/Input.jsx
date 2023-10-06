import { TextField, Typography } from "@mui/material";

function Input(props) {
  const {
    label,
    placeholder,
    size = "small",
    variant = "outlined",
    onChangeInput = () => {},
    inputClassName,
    className,
    value,
    type = "text",
    validate = {},
    isError = false,
    hiddenLabel = true,
    errorText = {},
  } = props;

  return (
    <>
      <Typography component="label" className={className}>
        {label}
      </Typography>
      <br />
      <TextField
        hiddenLabel={hiddenLabel}
        size={size}
        type={type}
        placeholder={placeholder}
        variant={variant}
        className={inputClassName}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        error={isError}
        {...validate}
        {...errorText}
      />
    </>
  );
}

export default Input;
