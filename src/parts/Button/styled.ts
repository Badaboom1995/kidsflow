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
    case "small":
      return {
        fontSize: "16px",
        fontWeight: 400,
      };

    default:
      return {
        color: "#fff",
        borderColor: "transparent",
        background: colors.primary,
        active: "#ff3633",
        fontWeight: 600,
      };
  }
};

type StyledButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  customType?: any;
  size?: "small";
  inline?: boolean;
};

// TODO. Refactor Button component. Separate components for different button types would be better
export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.inline ? "auto" : "315px")};
  margin-right: ${(props) => props.inline && "15px"};
  padding: ${(props) => (props.size === "small" ? "7px" : "15px")};
  color: ${(props) => chooseButtonParams(props.customType).color};
  border-radius: 30px;
  border: 1px solid ${(props) => chooseButtonParams(props.customType).border};
  font-weight: ${(props) => (props.size === "small" ? "400" : "600")};
  text-transform: uppercase;
  background-color: ${(props) =>
    chooseButtonParams(props.customType).background};
  font-size: ${(props) => (props.size === "small" ? "16px" : "18px")};
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
  text-decoration: none;
`;
