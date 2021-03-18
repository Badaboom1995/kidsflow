import React from "react";
import { StyledButton, Text } from "./styled";
import spinner from "./assets/spinner.gif";
import { ButtonProps } from "./types";

function Button({
  children,
  disabled,
  onClick,
  type,
  loading,
  size,
  inline,
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled || loading}
      onClick={onClick}
      type="submit"
      customType={type}
      size={size}
      inline={inline}
    >
      <Text spinnerActive={loading ? true : false}>
        {loading && <img src={spinner} alt="loader" />}
        {children}
      </Text>
    </StyledButton>
  );
}
export default Button;
