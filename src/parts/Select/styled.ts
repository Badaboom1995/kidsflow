import styled from "styled-components";
import arrow from "./assets/arrow.svg";
import { Field } from "formik";

type SelectBoxProps = {
  selected: boolean;
};

export const SelectBox = styled.div<SelectBoxProps>`
  position: relative;
  display: block;
  background-color: #fff0d3;

  padding: 10.5px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  text-align: center;
  color: ${(props) => !props.selected && "#252733"};
  cursor: pointer;
  transition: 0.3s all ease;
  transform: rotate(0deg);
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 11px;
    top: 13px;
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
};
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
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
