import React from "react";
import { NextArrow } from "./styled";
import Slick from "react-slick";

function Slider(props: any) {
  const defaultSettings = {
    draggable: false,
    infinite: false,
    controls: true,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };
  const settings = { ...defaultSettings, ...props.settings };
  return <Slick {...settings}>{props.children}</Slick>;
}
export default Slider;
