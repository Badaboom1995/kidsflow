import React from "react";

import Button from "../../../../../parts/Button";
import {IconCalling, IconCategory, IconClock, IconEdit, IconMapMarker} from "../../../../../components/Icons";

import {
  BodyActions,
  BodyDescription,
  BodyFeatures,
  BodyFeaturesItem,
  BodyFeaturesList,
  BodyFeaturesTitle,
  BodyInfoAddress,
  BodyInfoDetails,
  BodyInfoIcon,
  BodyInfoItemWrapper,
  BodyInfoTime,
  BodyReviews,
  BodyReviewsItem,
  BodyReviewsList,
  BodyReviewsTitle,
  BodyTimeStatus,
  BodyTrainers,
  BodyTrainersText,
  BodyTrainersTitle,
  InfoAddressMapLink,
  InfoAddressStation,
  InfoAddressStationMark,
  InfoAddressText,
  InfoBody,
  ReviewsItemAvatar,
  ReviewsItemHead,
  ReviewsItemName,
  ReviewsItemText
} from "../styled";

import {ICardBody} from "../../../types";

function CardBody({
  formState,
}:ICardBody) {
  return(
    <InfoBody>
      <BodyInfoItemWrapper>
        <BodyInfoIcon>
          <IconCategory color="#BEC2CE"/>
        </BodyInfoIcon>
        <BodyInfoDetails>
          {formState?.type ||  "Тип события"}, {formState?.ageFrom ||  "От"} - {formState?.ageTo ||  "До"} лет
        </BodyInfoDetails>
      </BodyInfoItemWrapper>

      <BodyInfoItemWrapper>
        <BodyInfoIcon>
          <IconMapMarker color="#BEC2CE" />
        </BodyInfoIcon>
        <BodyInfoAddress>
          <InfoAddressText>г. Москва, Россия, Петровский бульвар 15, стр. 1</InfoAddressText>
          <InfoAddressStation>
            <InfoAddressStationMark style={{background: "#BEC2CE"}} />
            Чеховская
          </InfoAddressStation>
          <InfoAddressMapLink>Показать на карте</InfoAddressMapLink>
        </BodyInfoAddress>
      </BodyInfoItemWrapper>

      <BodyInfoItemWrapper>
        <BodyInfoIcon>
          <IconClock color="#BEC2CE" />
        </BodyInfoIcon>
        <BodyInfoTime>
          <BodyTimeStatus>Сейчас открыто</BodyTimeStatus>
          {formState?.date || "00:00:00"}
        </BodyInfoTime>
      </BodyInfoItemWrapper>

      <BodyActions>
        <Button><IconEdit color="#FFC400" width={16}/> написать</Button>
        <Button><IconCalling color="#FFC400" width={16}/>позвонить</Button>
      </BodyActions>

      <BodyDescription>
        Индивидуальные занятия фехтованием с профессиональным тренером. Займитесь динамичным видом спорта! Индивидуальные тренировки помогут добиться максимальн...
      </BodyDescription>

      <BodyFeatures>
        <BodyFeaturesTitle>ОСОБЕННОСТИ</BodyFeaturesTitle>
        <BodyFeaturesList>
          <BodyFeaturesItem>
            индивидуальные занятия
          </BodyFeaturesItem>
          <BodyFeaturesItem>
            турниры
          </BodyFeaturesItem>
          <BodyFeaturesItem>
            групповые занятия
          </BodyFeaturesItem>
          <BodyFeaturesItem>
            душ
          </BodyFeaturesItem>
        </BodyFeaturesList>
      </BodyFeatures>

      <BodyTrainers>
        <BodyTrainersTitle>Трененры</BodyTrainersTitle>
        <BodyTrainersText>
          Стаж работы, специализация, программы
        </BodyTrainersText>
      </BodyTrainers>

      <BodyReviews>
        <BodyReviewsTitle>
          отзывы (12)
        </BodyReviewsTitle>
        <BodyReviewsList>
          <BodyReviewsItem>
            <ReviewsItemHead>
              <ReviewsItemAvatar>AV</ReviewsItemAvatar>
              <ReviewsItemName>Anna Vanova</ReviewsItemName>
            </ReviewsItemHead>
            <ReviewsItemText>
              Отличная школа: новая, помещения чистые, свежий ремонт. Отдельно хочу выделить тренеров - это профессионалы своего дела!
            </ReviewsItemText>
          </BodyReviewsItem>
        </BodyReviewsList>
        <Button>
          оставить отзыв
        </Button>
      </BodyReviews>

    </InfoBody>
  )
}

export default CardBody;

