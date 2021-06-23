import React from "react";

import cover_img from "./common/cover_img.jpg";

import {
  Wrapper,
  CoverTopActions,
  TopActionBack,
  TopActionStar,
  TopActionDownload,
  CoverImage,
  Image,
  CoverInfo,
} from "./styled";

import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

import {TFormContactsState, TFormState} from "../../index";

export interface IEventCard {
  maxRightContentHeight: number;
  formState: TFormState;
  formContactsState?: TFormContactsState;
}

function EventCard({
  maxRightContentHeight,
  formState,
  formContactsState,
}:IEventCard) {

  return (
    <Wrapper style={{maxHeight: `${maxRightContentHeight}px`}}>
      <CoverImage>
        <CoverTopActions>
          <TopActionBack />
          <TopActionStar />
          <TopActionDownload />
        </CoverTopActions>
        <Image src={cover_img}/>
      </CoverImage>

      <CoverInfo>
        <CardHeader formState={formState}/>
        <CardBody formState={formState} />
      </CoverInfo>

    </Wrapper>
  );
}

export default EventCard;
