import styled from "styled-components";
import plus from "assets/plus.svg";
import { colors } from "config/constants";

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  background-color: #ffffff4d;
  border: 1px dashed ${colors.primary};
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    background-image: url(${plus});
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 5px;
  }
`;
export const Label = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: 400px;
  text-align: center;
  line-height: 17px;
  input {
    position: absolute;
    opacity: 0;
  }
`;
