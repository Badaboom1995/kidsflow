import React, {useEffect, useState} from "react";

import cover_img from "./common/cover_img.jpg";

import {
  Wrapper,
  CoverTopActions,
  TopActionBack,
  TopActionFavorite,
  CoverImage,
  Image,
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
  uploadedImages,
}:IEventCard) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    console.log("uploadImages", uploadedImages)
  }, [uploadedImages])

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
          {!!uploadedImages?.length ? (
            uploadedImages.map((item) => (
              <Image key={item.id} src={item.url}/>
            ))
          ) : (
            <SliderPlug>Фото</SliderPlug>
          )}
        </Slider>
        {!!uploadedImages?.length && (
          <SliderCounter>
            {currentSlide + 1} / {uploadedImages?.length}
          </SliderCounter>
        )}

      </CoverImage>

      <CoverInfo>
        <CardHeader formState={formState}/>
        <CardBody formState={formState} />
      </CoverInfo>

    </Wrapper>
  );
}

export default EventCard;
