import styled from "styled-components";

type WrapperProps = {
  error: string;
};
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border: 1px solid ${(props) => (props.error ? "#e82828" : "transparent")};
  border-radius: 10px;
`;
export const ErrorText = styled.p`
  position: absolute;
  right: 0;
  color: #e82828;
  font-size: 10px;
  padding-left: 15px;
  margin: 4px 0px;
  min-height: 15px;
`;
