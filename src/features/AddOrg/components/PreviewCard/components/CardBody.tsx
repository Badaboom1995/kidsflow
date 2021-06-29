import React from "react";

import {IconCategory, IconClock, IconMapMarker} from "../../../../../components/Icons";

import {
  BodyInfoAddress,
  BodyInfoDetails,
  BodyInfoIcon,
  BodyInfoItemWrapper,
  BodyInfoTime,
  BodyTimeStatus,
  InfoAddressMapLink,
  InfoAddressText,
  InfoBody,
  BodyDescriptionWrapper,
  BodyDescriptionTitle,
  BodyDescriptionText,
  ContactsWrapper,
} from "../styled";

import {ICardBody} from "../../../types";

function CardBody({generalFormState, contactFormState}:ICardBody) {
  return(
    <InfoBody>
      <BodyInfoItemWrapper>
        <BodyInfoIcon>
          <IconCategory color="#BEC2CE"/>
        </BodyInfoIcon>
        <BodyInfoDetails>
          {generalFormState?.directions ||  "Направление"}, {generalFormState?.ageFrom ||  "От"} - {generalFormState?.ageTo ||  "До"} лет
        </BodyInfoDetails>
      </BodyInfoItemWrapper>

      <BodyInfoItemWrapper>
        <BodyInfoIcon>
          <IconMapMarker color="#BEC2CE" />
        </BodyInfoIcon>
        <BodyInfoAddress>
          <InfoAddressText>{contactFormState?.address || "Адрес"}</InfoAddressText>
          <InfoAddressMapLink>Показать на карте</InfoAddressMapLink>
        </BodyInfoAddress>
      </BodyInfoItemWrapper>

      <BodyInfoItemWrapper>
        <BodyInfoIcon>
          <IconClock color="#BEC2CE" />
        </BodyInfoIcon>
        <BodyInfoTime>
          <BodyTimeStatus>Сейчас открыто</BodyTimeStatus>
          {generalFormState?.businessHours || "00:00:00"}
        </BodyInfoTime>
      </BodyInfoItemWrapper>

      <BodyDescriptionWrapper>
        <BodyDescriptionTitle>
          Описание
        </BodyDescriptionTitle>
        <BodyDescriptionText>
          {generalFormState?.about || "Описание"}
        </BodyDescriptionText>
      </BodyDescriptionWrapper>

    </InfoBody>
  )
}

export default CardBody;

