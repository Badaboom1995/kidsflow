import React from 'react';
import { StyledButton, Text, Icon } from './styled';
import spinner from './assets/spinner.gif';
import { ButtonProps } from './types';

function Button({
  children,
  disabled,
  onClick,
  type,
  loading,
  size,
  inline,
  icon,
  noSubmit,
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled || loading}
      onClick={onClick}
      type={noSubmit ? 'button' : 'submit'}
      customType={type}
      size={size}
      inline={inline}
    >
      {icon && <Icon src={icon} alt="icon" />}
      <Text spinnerActive={loading ? true : false}>
        {loading && <img src={spinner} alt="loader" />}
        {children}
      </Text>
    </StyledButton>
  );
}
export default Button;
