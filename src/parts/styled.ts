import styled from "styled-components";
import spinner from "assets/spinner.gif";
import { colors } from "config/constants";

export const Container = styled.div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
`;
export const Tariff = styled.div`
  width: 75px;
  font-size: 16px;
  padding: 7px;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  text-align: center;
  color: ${colors.primary};
  text-transform: uppercase;
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    margin-right: 7px;
    background-color: ${colors.primary};
    border-radius: 50%;
  }
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
