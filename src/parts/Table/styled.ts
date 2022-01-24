import styled from "styled-components";
import { colors } from "config/constants";
import arrowLeft from "./assets/left.svg";
import arrowDown from "./assets/right.svg";
import check from "./assets/check.svg";
import { absoluteCenter } from "parts/mixins";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ShadowContainer = styled.div`
  position: relative;
  box-shadow: 0px 3px 15px 0px #00000032;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;
export const TableContainer = styled.table`
  border-spacing: 0;
  overflow: hidden;
  border-collapse: collapse;
  padding: 0;
  width: 100%;
  max-height: calc(100vh - 120px);
  margin-bottom: 95px;
  background-color: #fff;

  border-radius: 9px;
  overflow: scroll;
`;
export const TBody = styled.tbody``;
export const Footer = styled.footer`
  position: absolute;
  width: calc(100%);
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  padding: 25px 30px;
  font-weight: 400;
  box-shadow: 0px 3px 15px 0px #00000032;
`;
type CellProps = {
  textalign?: string;
  width?: string;
};
export const Cell = styled.td<CellProps>`
  padding: 16px 10px;
  font-size: 14px;
  width: ${(props) => props.width};
  text-align: ${(props) => props.textalign};
  font-weight: 500;
`;
type RowProps = {
  head?: boolean;
};
export const THead = styled.thead`
  background-color: #ffe6b4;
  ${Cell} {
    font-weight: 700;
  }
`;
export const Row = styled.tr<RowProps>`
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid
    ${(props) => (props.head ? "transparent" : "#dfe0eb")};
  ${Cell} {
    padding: ${(props) => props.head && "7px 0"};
    position: relative;
    &:first-child {
      padding-left: 50px;
    }
  }
  &:hover {
    background-color: ${(props) => !props.head && "#fe5b5432"};
  }
`;
type CheckBoxProps = {
  selected: boolean;
};
export const CheckBox = styled.div<CheckBoxProps>`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid
    ${(props) => (props.selected ? colors.secondary : "#D0D0D0")};
  background-color: ${(props) =>
    props.selected ? colors.secondary : "#F5F5F5"};
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${(props) => props.selected && check});
    background-size: contain;
    width: 12px;
    height: 9px;
  }
`;

export const RowCheckbox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  width: 50px;
  transition: 0.2s all ease;
  &:hover span {
    border-color: ${colors.secondary};
  }
  ${CheckBox} {
    ${absoluteCenter};
  }
`;

export const RowFunctions = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70px;
  border-radius: 50%;
  transition: 0.2s all ease;
  &:hover span {
    background-color: #ccc;
  }
  span {
    ${absoluteCenter}
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #ececec;
    transition: 0.1s all ease;
  }
`;
export const Controls = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
`;
export const SubmitButton = styled.button`
  position: absolute;
  right: 5px;
  top: 4px;
  background-color: #fff;
  border: none;
  padding: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
`;
type ControlsItemProps = {
  textalign?: string;
  width?: string;
  active?: boolean;
};
export const ControlsItem = styled.input<ControlsItemProps>`
  opacity: ${(props) => (props.active ? 1 : 0.1)};
  padding: 8px 0;
  background-color: transparent;
  border: none;
  margin-bottom: -1px;
  width: ${(props) => props.width};
  flex-grow: ${(props) => (props.width ? 0 : 1)};
  text-align: ${(props) => props.textalign || "left"};
  border-bottom: 1px solid transparent;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.primary};
    /* border-color: ${colors.primary}; */
  }
`;
export const ConrolSelect = styled.input<ControlsItemProps>`
  padding: 8px 0;
  background-color: transparent;
  border: none;
  margin-bottom: -1px;
  width: 100%;
  flex-grow: ${(props) => (props.width ? 0 : 1)};
  text-align: ${(props) => props.textalign || "left"};
  border-bottom: 1px solid transparent;
  color: #fff;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.primary};
    /* border-color: ${colors.primary}; */
  }
`;
export const ConrolWrapper = styled.div<ControlsItemProps>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  flex-grow: ${(props) => (props.width ? 0 : 1)};
  text-align: ${(props) => props.textalign || "left"};
  border-bottom: 1px solid transparent;
  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 12px;
    margin-right: 5px;
    background-image: url(${arrowDown});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const Tariff = styled.div`
  width: 75px;
  font-size: 16px;
  padding: 7px;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  text-align: center;
  color: ${colors.primary};
  text-transform: uppercase;
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    margin-right: 7px;
    background-color: ${colors.primary};
    border-radius: 50%;
  }
`;
export const PaginationText = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
`;
type PaginationProps = {
  active?: boolean;
};
export const PaginationButton = styled.button<PaginationProps>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  margin: 2px;
  background-color: ${(props) => props.active && "#fff0d3"};
  &:hover {
    background-color: #fff0d3;
  }
`;
type ArrowProps = {
  right?: boolean;
};
export const Arrow = styled.div<ArrowProps>`
  display: flex;
  width: 10px;
  cursor: pointer;
  height: 12px;
  margin: 0 10px;
  background-image: url(${arrowLeft});
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${(props) => props.right && "rotate(180deg)"};
`;
