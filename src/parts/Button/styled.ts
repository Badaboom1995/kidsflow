import styled from "styled-components";
import { colors } from "config/constants";

const getButtonMods = (type?: string, size?: string) => ({
  border: `1px solid ${type === "ghost" ? colors.gray : "transparent"}`,
  "background-color": type === "ghost" ? "transparent" : colors.secondary,
  width: size === "full" && "100%",
});

type StyledButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  customType?: any;
  size?: "small" | "full";
  inline?: boolean;
};
export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  padding: 10px;
  color: ${colors.gray};
  border-radius: 30px;
  border: 1px solid transparent;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${colors.secondary};
  font-size: 12px;
  outline: none;
  cursor: ${(props) => !props.disabled && "pointer"};
  ${(props) => getButtonMods(props.customType, props.size)}
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.customType !== "ghost" && "#ffd447"};
  }
  &:active {
    background-color: #ffc60a;
  }
  img {
    width: 40px;
    position: absolute;
    left: -40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${Icon} {
    left: 24px;
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
