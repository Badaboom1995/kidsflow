import React from "react";
import { Arrow, Fade, Wrapper } from "./styled";
import Slick from "react-slick";

function Slider(props: any) {
  const defaultSettings = {
    draggable: false,
    infinite: false,
    controls: true,
    speed: 500,
    slidesToShow: 6.4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow rotate />,
  };
  const settings = { ...defaultSettings, ...props.settings };
  return (
    <Wrapper>
      <Fade />
      <Slick {...settings}>{props.children}</Slick>
    </Wrapper>
  );
}
export default Slider;
