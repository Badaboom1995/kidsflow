import styled from "styled-components";

export const Line = styled.div`
  width: 35px;
  height: 3px;
  background-color: #2f2f2f;
  margin-bottom: 7px;
  border-radius: 5px;
`;

type WrapperProps = {
  open?: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  cursor: pointer;
  width: 35px;
  height: 30px;
  ${Line} {
    position: ${(props) => (!props.open ? "absolute" : "realtive")};
    left: 50%;
    top: 50%;
    transform: ${(props) =>
      !props.open && "translate(-50%, -50%) rotate(-45deg)"};
  }
  ${Line}:nth-child(n+2) {
    transform: ${(props) =>
      !props.open && "translate(-50%, -50%) rotate(45deg)"};
  }
`;
