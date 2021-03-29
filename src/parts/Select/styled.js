import styled from "styled-components";
import arrow from "./assets/arrow.svg";
import { Field } from "formik";

export const SelectBox = styled.div`
  position: relative;
  display: block;
  background-color: #f5f8fa;
  padding: 11.5px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  text-align: center;
  color: ${(props) => !props.selected && "#A2A2A2"};
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
  top: 85px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 3px 8px #00000026;
  padding: 5px 0;
`;

export const Wrapper = styled.div`
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
  padding: 17px 10px;
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
