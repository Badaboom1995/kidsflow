import React, { useState } from "react";

import {
  Wrapper,
  PhoneInfoImage,
  CoverTopActions,
  TopActionBack,
  TopActionFavorite,
  CoverImage,
  Image,
  CoverInfo,
  SliderCounter,
  SliderPlug,
  ContactsWrapper,
  CoverTopInfoWrapper,
  CoverTopInfo,
} from "./styled";

import phoneInfoPlug from "../../../../common/images/svg/phone-top-actions.svg";
import {
  IconArrowLineLeft,
  IconCategory,
  IconHeart,
  IconUser,
} from "../../../../components/Icons";
import Button from "../../../../parts/Button";
import Slider from "../../../../parts/Slider";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

import { IPreviewCard } from "../../types";
import { useSelector } from "react-redux";
import { imagesSelector } from "../../duck/selectors";

function PreviewCard({
  generalFormState,
  contactFormState,
  formalFormState,
}: IPreviewCard) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images = useSelector(imagesSelector);
  const photos = images;

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    className: "event-card_slider__wrapper",
  };

  return (
    <Wrapper>
      <CoverImage>
        <PhoneInfoImage src={phoneInfoPlug} />
        <CoverTopActions>
          <TopActionBack>
            <IconArrowLineLeft color="none" />
          </TopActionBack>
          <TopActionFavorite>
            <IconHeart color="none" />
          </TopActionFavorite>
        </CoverTopActions>
        <Slider settings={sliderSettings} setCurrentSlide={setCurrentSlide}>
          {!!photos?.length ? (
            photos.map((item) => <Image key={item.id} src={item.url} />)
          ) : (
            <SliderPlug>Фото</SliderPlug>
          )}
        </Slider>
        {!!photos?.length && (
          <SliderCounter>
            {currentSlide + 1} / {photos?.length}
          </SliderCounter>
        )}
        <CoverTopInfoWrapper>
          <CoverTopInfo>
            <IconCategory color="#FFC400" width={10} height={10} />
            {generalFormState?.directions || "Направление"}
          </CoverTopInfo>
          <CoverTopInfo>
            <IconUser color="#FFC400" width={8} height={10} />
            {generalFormState?.ageFrom || "От"} -{" "}
            {generalFormState?.ageTo || "До"} лет
          </CoverTopInfo>
        </CoverTopInfoWrapper>
      </CoverImage>

      <CoverInfo>
        <CardHeader generalFormState={generalFormState} />
        <CardBody
          generalFormState={generalFormState}
          contactFormState={contactFormState}
        />
      </CoverInfo>

      <ContactsWrapper>
        <Button>Смотреть контакты</Button>
      </ContactsWrapper>
    </Wrapper>
  );
}

export default PreviewCard;
