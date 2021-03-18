import { colors } from "config/constants";
import { Container } from "parts/styled";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  box-sizing: border-box;
  margin-bottom: 50px;
  background: #f7f7f7;
`;
export const Cover = styled.img`
  display: block;
  margin-right: 40px;
  height: 260px;
`;
export const Content = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;
export const Empty = styled.p`
  font-size: 36px;
  color: #bec2ce;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-grow: 1;
  padding: 0;
  height: 270px;
`;

type ItemProps = {
  active?: boolean;
  onClick?: any;
};
export const Item = styled.li<ItemProps>`
  position: relative;
  font-size: 16px;
  width: 25%;
  font-weight: 400;
  margin-right: 40px;
  margin-bottom: 5px;
  list-style: none;
  padding: 7px 20px;
  border: 1px solid
    ${(props) => (props.active ? ` ${colors.primary}` : "transparent")};
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s all ease;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: ${(props) => (props.active ? "block" : "none")};
    right: 15px;
    top: 15px;
    width: 17px;
    height: 1px;
    background-color: ${colors.black};
    border-radius: 1px;
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
`;
type AlertProps = {
  visible?: boolean;
};
export const Alert = styled.p<AlertProps>`
  color: ${(props) => (props.visible ? "#000" : "transparent")};
  font-size: 16px;
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;
