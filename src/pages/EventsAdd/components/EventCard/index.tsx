import React from "react";
import {
  Wrapper,
  CoverTopActions,
  TopActionBack,
  TopActionStar,
  TopActionDownload,
  CoverImage,
  Image,
  CoverInfo,
  InfoBody,
  CoverMainInfo,
  MainInfoHead,
  MainInfoStatus,
  MainInfoLogo,
  MainInfoTitle,
  MainInfoSub,
  MainInfoSubItem,
  BodyInfoDetails,
  BodyInfoAddress,
  BodyInfoTime,
  BodyTimeStatus,
  InfoAddressText,
  InfoAddressStation,
  InfoAddressMapLink,
  InfoAddressStationMark,
  BodyActions,
  BodyDescription,
  BodyFeatures,
  BodyFeaturesTitle,
  BodyFeaturesList,
  BodyFeaturesItem,
  BodyTrainers,
  BodyTrainersTitle,
  BodyTrainersText,
  BodyReviews,
  BodyReviewsTitle,
  BodyReviewsList,
  BodyReviewsItem,
  ReviewsItemHead,
  ReviewsItemAvatar,
  ReviewsItemName,
  ReviewsItemText,
} from "./styled";
import cover_img from "./cover_img.jpg";
import Button from "../../../../parts/Button";

export interface IEventCard {
  maxRightContentHeight: number;
}


function EventCard({maxRightContentHeight}:IEventCard) {
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
        <CoverMainInfo>

          <MainInfoHead>
            <MainInfoStatus>
              организация проверена
            </MainInfoStatus>
            <MainInfoLogo>
              logo
            </MainInfoLogo>
          </MainInfoHead>

          <MainInfoTitle>
            СДЮШОР фехтования
          </MainInfoTitle>

          <MainInfoSub>
            <MainInfoSubItem>4.9</MainInfoSubItem>
            <MainInfoSubItem>12 отзывов</MainInfoSubItem>
            <MainInfoSubItem>3 программы</MainInfoSubItem>
          </MainInfoSub>

        </CoverMainInfo>

        <InfoBody>
          <BodyInfoDetails>
            Спорт, 5 - 15 лет
          </BodyInfoDetails>

          <BodyInfoAddress>
            <InfoAddressText>г. Москва, Россия, Петровский бульвар 15, стр. 1</InfoAddressText>
            <InfoAddressStation>
              <InfoAddressStationMark style={{background: "#BEC2CE"}} />
              Чеховская
            </InfoAddressStation>
            <InfoAddressMapLink>Показать на карте</InfoAddressMapLink>
          </BodyInfoAddress>

          <BodyInfoTime>
            <BodyTimeStatus>Сейчас открыто</BodyTimeStatus>
            Ежеденвно 10:00 - 21:00
          </BodyInfoTime>

          <BodyActions>
            <Button>написать</Button>
            <Button>позвонить</Button>
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

      </CoverInfo>

    </Wrapper>
  );
}

export default EventCard;
