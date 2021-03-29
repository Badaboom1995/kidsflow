import styled from "styled-components";
import arrow from "./arrow.svg";

export const Wrapper = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #b4b6c1;
  margin-bottom: 10px;
`;
export const BackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  &:before {
    content: "";
    display: block;
    width: 17px;
    height: 14px;
    margin-right: 8px;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
