import styled from "styled-components";
import { colors } from "config/constants";

const chooseButtonParams = (type: string) => {
  switch (type) {
    case "transparent":
      return {
        color: colors.primary,
        border: colors.primary,
        background: "transparent",
        active: "#f6f6f6",
      };

    default:
      return {
        color: "#fff",
        borderColor: "transparent",
        background: colors.primary,
        active: "#ff3633",
      };
  }
};

type StyledButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  customType?: any;
};
export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 315px;
  padding: 15px;
  color: ${(props) => chooseButtonParams(props.customType).color};
  border-radius: 30px;
  border: 1px solid ${(props) => chooseButtonParams(props.customType).border};
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) =>
    chooseButtonParams(props.customType).background};
  font-size: 18px;
  outline: none;
  cursor: ${(props) => !props.disabled && "pointer"};
  &:active {
    background-color: ${(props) => chooseButtonParams(props.customType).active};
  }
  &:focus {
    outline: none;
  }
  img {
    width: 40px;
    position: absolute;
    left: -40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
type TextProps = {
  spinnerActive: boolean;
};
export const Text = styled.span<TextProps>`
  position: relative;
  color: ${(props) => props.spinnerActive && "transparent"};
`;
