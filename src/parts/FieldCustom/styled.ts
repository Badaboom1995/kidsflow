import styled from "styled-components";
type WrapperProps = { col?: number };
export const Wrapper = styled.div<WrapperProps>`
  grid-column: span ${(props) => props.col || 6};
  padding: 0 10px;
  margin-bottom: 15px;
`;
