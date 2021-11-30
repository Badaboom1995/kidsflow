import styled from "styled-components"
import { absoluteCenter } from "parts/mixins";

export const Wrapper = styled.div``
type TRowFunctions = { open: boolean }
export const RowFunctions = styled.div<TRowFunctions>`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70px;
  border-radius: 50%;
  transition: 0.2s all ease;
 &:hover span {
   background-color: #FED98E;
 }
  span{
    ${absoluteCenter}
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${props => props.open ? "#FED98E" : "#ECECEC"};
    transition: 0.1s all ease;
  }
`;

export const FuncsMenu = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 164px;
    z-index: 9;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
    transform: translate(-75%, -30%);
    overflow: hidden;
`
export const FunctionRow = styled.div`
    padding: 13px 22px;
    &:hover{
        background-color:#F5F5F5
    }
`

