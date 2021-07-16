import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
type TArrow = { reverse?: boolean };
export const Arrow = styled.img<TArrow>`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  transform: ${(props) => props.reverse && "rotate(180deg)"};
`;
