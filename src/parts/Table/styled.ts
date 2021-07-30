import styled from "styled-components";
import { colors } from "config/constants";
import arrowLeft from "./assets/left.svg";
import arrowDown from "./assets/right.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ShadowContainer = styled.div`
  box-shadow: 0px 3px 15px 0px #00000032;
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
  background-color: #fff;

  border-radius: 9px;
  margin-bottom: 1px;
  overflow: scroll;
`;
export const TBody = styled.tbody``;
export const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #fff;
  padding: 25px 30px;
  font-weight: 400;
  border-radius: 0 0 9px 9px;
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
  cursor: pointer;
  border-bottom: 1px solid
    ${(props) => (props.head ? "transsparent" : "#dfe0eb")};
  ${Cell} {
    padding: ${(props) => props.head && "7px 0"};
  }
  &:hover {
    background-color: ${(props) => !props.head && "#fe5b5432"};
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
