import styled from "styled-components";
import arrow from "./assets/arrow.svg";

export const Wrapper = styled.div`
  margin-bottom: 30px;
  .slick-list {
    /* padding: 0 20% 0 0; */
  }
  padding-bottom: 100px;
`;
export const NextArrow = styled.div`
  background: #ff5a57;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  &:hover {
    background: #ff5a57;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
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
