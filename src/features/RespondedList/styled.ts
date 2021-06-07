import styled from "styled-components";
import { FormSectionTitle } from "parts/styled";
import rightArrow from "./assets/right.svg";

export const Wrapper = styled.div``;
export const Title = styled(FormSectionTitle)`
  text-align: center;
`;
export const List = styled.ul`
  background-color: #fff;
  padding: 0px;
  border-radius: 15px;
  border: 1px solid #dfe0eb;
  max-height: 735px;
  overflow: scroll;
`;

type ListItemProps = {
  number: number;
};
export const ListItem = styled.li<ListItemProps>`
  position: relative;
  list-style: none;
  padding: 24px 30px;
  border-bottom: 1px solid #dfe0eb;
  font-size: 14px;
  font-weight: 500;
  &:before {
    content: "${(props) => props.number}";
    margin-right: 42px;
  }
  &:after {
    content: "";
    position: absolute;
    right: 50px;
    top: 50%;
    display: block;
    width: 8px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${rightArrow});
    transform: translateY(-50%);
  }
`;
