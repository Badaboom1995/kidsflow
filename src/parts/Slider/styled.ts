import styled from "styled-components";
import arrow from "./assets/arrow.svg";

export const Wrapper = styled.div`
  position: relative;
`;
type ArrowProps = {
  rotate?: number;
};
export const Arrow = styled.div<ArrowProps>`
  opacity: 1;
  background: #ff5a57;
  transform: translate(-50%, -50%)
    ${(props) => (props.rotate ? "rotate(180deg)" : "")};
  width: 75px;
  height: 75px;
  border-radius: 50%;
  z-index: 2;
  transition: 0.2s all ease;
  &.slick-disabled {
    opacity: 0;
  }
  &:hover {
    background: #ff5a57;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 53%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 32px;
    height: 32px;
  }
`;
export const Fade = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  transform: rotate(180deg);
  width: 125px;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 90.62%
  );
`;
