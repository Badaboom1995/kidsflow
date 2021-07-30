import styled from "styled-components";
import { Field } from "formik";

const placeholderColor = "#6c757d";

export const Wrapper = styled.div``;
export const Textarea = styled.textarea`
  font-size: 16px;
  background-color: transparent;
  border: none;
  font-family: Arial, sans-serif;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;
type TStyledInput = {
  centered: boolean;
};
export const HiddenField = styled(Field)`
  display: none;
`;
export const StyledInput = styled.input<TStyledInput>`
  width: 100%;
  background-color: transparent;
  font-size: 16px;
  border: none;
  font-family: inherit;
  height: auto;
  font-family: Arial, sans-serif;
  font-weight: normal;
  text-align: ${(props) => props.centered && "center"};

  padding-left: 0px;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${placeholderColor};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${placeholderColor};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${placeholderColor};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${placeholderColor};
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
export const Prompt = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  left: 0;
  bottom: -6px;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transform: translateY(100%);
  border-radius: 10px;
`;
export const Option = styled.p`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #f4f4f4;
  }
`;
export const ErrorText = styled.p`
  color: #e82828;
  font-size: 10px;
  padding-left: 15px;
  margin: 4px 0px;
  min-height: 12px;
  font-family: "Roboto";
`;
type InputContainerProps = {
  icon?: string;
  centered: boolean;
};
export const InputContainer = styled.label<InputContainerProps>`
  display: flex;
  align-items: center;
  background-color: #fff0d3;
  padding: 9px;
  padding-left: ${(props) => !props.centered && "40px"};
  border-radius: 10px;
  letter-spacing: 0.15px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  margin: 0;

  &:hover {
    cursor: #a2a2a2;
  }
  &:before {
    content: "";
    display: ${(props) => (props.icon ? "inline-block" : "none")};
    width: 20px;
    height: 20px;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 14px;
  }
`;
