import styled from "styled-components";

type OverlayProps = {
  isVisible: boolean;
};
export const Overlay = styled.div<OverlayProps>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  cursor: pointer;
`;
export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  cursor: auto;
`;
