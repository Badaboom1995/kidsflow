import styled from "styled-components";
import spinner from "assets/spinner.gif";

export const Container = styled.div`
  position: relative;
  width: 1440px;
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
  opacity: ${(props) => (props.closed ? "0" : "1")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.closed ? -1 : 9)};
  background-color: #1b1b1b4d;
  cursor: pointer;
  transition: 0.2s all ease;
`;

export const Loader = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background-image: url(${spinner});
  background-size: contain;
  border: none;
  background-color: transparent;
`;
