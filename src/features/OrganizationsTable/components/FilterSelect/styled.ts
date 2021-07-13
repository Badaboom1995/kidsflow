import styled from "styled-components";
import arrow from "./assets/arrow.svg";
import { Field } from "formik";

type SelectBoxProps = {
  selected: boolean;
};

export const SelectBox = styled.div<SelectBoxProps>`
  position: relative;
  display: block;
  padding: 11.5px;
  padding: 8px 0;
  padding-left: 30px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  text-align: left;
  color: ${(props) => !props.selected && "#252733"};
  cursor: pointer;
  transition: 0.3s all ease;
  transform: rotate(0deg);
  color: #0000008a;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 8px;
    width: 20px;
    height: 20px;
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;
    transition: 0.3s transform ease;
  }
`;

export const OptionsContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-height: 220px;
  box-sizing: border-box;
  overflow: scroll;
  position: absolute;
  top: 75px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 3px 8px #00000026;
`;

type WrapperProps = {
  open: boolean;
  textalign?: string;
  width?: string;
  active?: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  padding: 8px 0;
  background-color: transparent;
  border: none;
  margin-bottom: -1px;
  width: ${(props) => props.width};
  flex-grow: ${(props) => (props.width ? 0 : 1)};
  text-align: ${(props) => props.textalign || "left"};
  border-bottom: 1px solid transparent;

  ${OptionsContainer} {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  ${SelectBox}:after {
    transform: ${(props) => props.open && "rotate(-180deg)"};
  }
`;
export const Option = styled.label`
  display: block;
  padding: 10px;
  font-weight: normal;
  background-color: #fff;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: #f5f8fa;
  }

  &:active {
    background-color: #e4ecf1;
  }
`;
export const OptionTitle = styled.span`
  font-size: 16px;
`;
export const Radio = styled(Field)`
  display: none;
`;
