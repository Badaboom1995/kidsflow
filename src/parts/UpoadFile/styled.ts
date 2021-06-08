import styled from "styled-components";
import plus from "assets/plus.svg";
import { colors } from "config/constants";
import cross from "./assets/close.svg";

type WrapperProps = {
  file?: boolean;
  image?: string;
};
export const Wrapper = styled.div`
  position: relative;
`;
export const Preview = styled.label<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.file ? "row" : "column")};
  align-items: center;
  border-radius: 10px;
  width: ${(props) => (props.file ? "350px" : "96px")};
  height: ${(props) => (props.file ? "33px" : "96px")};
  margin-bottom: ${(props) => props.file && "10px"};
  background-color: #ffffff4d;
  border: 1px dashed ${colors.primary};
  padding: ${(props) => (props.file ? "5px" : "15px")};
  box-sizing: border-box;
  background-image: url(${(props) => props.image});
  background-size: cover;
  font-size: ${(props) => (props.image ? "0px" : "15px")};
  cursor: pointer;
  &:before {
    content: "";
    display: ${(props) => (props.image ? "none" : "block")};
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
    margin: ${(props) => props.file && "0 15px"};
    background-image: url(${plus});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Label = styled.div`
  position: relative;
  font-weight: 400px;
  text-align: center;
  line-height: 17px;
  input {
    position: absolute;
    opacity: 0;
    display: none;
  }
`;

export const CloseButton = styled.button`
  background-image: url(${cross});
  position: absolute;
  right: 15px;
  top: -10px;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
`;
