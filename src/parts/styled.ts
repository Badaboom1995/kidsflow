import styled from "styled-components";

export const GlobalContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #0094ff;
  cursor: pointer;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
type OverlayProps = {
  closed?: boolean;
};
export const Overlay = styled.div<OverlayProps>`
  display: ${(props) => (props.closed ? "none" : "block")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background-color: #1b1b1b4d;
  cursor: pointer;
`;
