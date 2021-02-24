import { colors } from "config/constants";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
export const Cover = styled.img`
  display: block;
  margin-right: 40px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  width: calc(75% - 40px);
  max-height: 270px;
`;

type ItemProps = {
  active?: boolean;
};
export const Item = styled.li<ItemProps>`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  margin-right: 40px;
  margin-bottom: 3px;
  list-style: none;
  padding: 7px 20px;
  border: ${(props) => props.active && `1px solid ${colors.primary}`};
  border-radius: 25px;
  cursor: pointer;

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
