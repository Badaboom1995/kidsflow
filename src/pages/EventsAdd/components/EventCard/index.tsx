import React, {useState} from "react";

import {
  Wrapper,
  CoverTopActions,
  TopActionBack,
  TopActionFavorite,
  CoverImage,
  CoverInfo,
  SliderCounter,
  SliderPlug,
} from "./styled";

import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import {IEventCard} from "../../types";
import Slider from "../../../../parts/Slider";
import {IconArrowLineLeft, IconHeart} from "../../../../components/Icons";

function EventCard({
  maxRightContentHeight,
  formState,
  formContactsState,
}:IEventCard) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    className: "event-card_slider__wrapper"
  }

  return (
    <Wrapper style={{maxHeight: `${maxRightContentHeight}px`}}>
      <CoverImage>
        <CoverTopActions>
          <TopActionBack>
            <IconArrowLineLeft color="none"/>
          </TopActionBack>
          <TopActionFavorite>
            <IconHeart color="none" />
          </TopActionFavorite>
        </CoverTopActions>
        <Slider
          settings={sliderSettings}
          setCurrentSlide={setCurrentSlide}
        >
            <SliderPlug>Фото</SliderPlug>
        </Slider>
          <SliderCounter>
            {currentSlide + 1} / 1
          </SliderCounter>

      </CoverImage>

      <CoverInfo>
        <CardHeader formState={formState}/>
        <CardBody formState={formState} />
      </CoverInfo>

    </Wrapper>
  );
}

export default EventCard;
