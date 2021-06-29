import React, {useState} from "react";

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
} from "./styled";

import phoneInfoPlug from "../../../../common/images/svg/phone-top-actions.svg"
import {IconArrowLineLeft, IconHeart} from "../../../../components/Icons";
import Button from "../../../../parts/Button";
import Slider from "../../../../parts/Slider";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

import {IPreviewCard} from "../../types";
import {useSelector} from "react-redux";
import {currentOrganizationSelector} from "../../duck/selectors";

function PreviewCard({
  maxRightContentHeight,
  generalFormState,
  contactFormState,
  formalFormState,
}:IPreviewCard) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const currentOrganization = useSelector(currentOrganizationSelector);
  const photos = currentOrganization?.photos;

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
        <PhoneInfoImage src={phoneInfoPlug}/>
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
          {!!photos?.length ? (
            photos.map((item) => (
              <Image key={item.id} src={item.cloudUrl}/>
            ))
          ) : (
            <SliderPlug>Фото</SliderPlug>
          )}
        </Slider>
        {!!photos?.length && (
          <SliderCounter>
            {currentSlide + 1} / {photos?.length}
          </SliderCounter>
        )}
      </CoverImage>

      <CoverInfo>
        <CardHeader generalFormState={generalFormState}/>
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
