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
    // one means true
    prevArrow: <Arrow rotate={1} />,
    afterChange: (currentSlide: number) => props.setCurrentSlide(currentSlide),
  };
  const settings = { ...defaultSettings, ...props.settings };
  return (
    <Wrapper className="slick-slider_wrapper">
      <Fade className="slick-slider_fade-block" />
      <Slick {...settings}>{props.children}</Slick>
    </Wrapper>
  );
}
export default Slider;
