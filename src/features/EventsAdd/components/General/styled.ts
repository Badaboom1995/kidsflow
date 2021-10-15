import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const CoverImage = styled.div`
  width: 100%;
  position: sticky;
  height: 340px;
  top: 0;
  .slick-slider_wrapper {
    height: 100%;
  }
  .slick-slider_fade-block {
    display: none;
  }
  .event-card_slider__wrapper {
    height: 100%;
    .slick-list {
      height: 100%;
    }
    .slick-track {
      height: 100%;
    }
    .slick-slide {
      & > div {
        height: 100%;
        position: relative;
        overflow: hidden;
      }
      img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        min-width: 100%;
        min-height: 100%;
        max-height: 200%;
        max-width: 200%;
        width: auto !important;
      }
    }
    .slick-arrow {
      background: rgba(0, 0, 0, 0.3);
      width: 30px;
      height: 30px;
      &:before {
        width: 50%;
        height: 50%;
      }
      &.slick-prev {
        left: 0;
        transform: translate(10px, -50%) rotate(180deg);
      }
      &.slick-next {
        right: 0;
        transform: translate(-10px, -50%);
      }
    }
  }
`;

export const SliderPlug = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e8eaee;
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #bec2ce;
  text-transform: lowercase;
`;

export const SliderCounter = styled.span`
  position: absolute;
  right: 15px;
  bottom: 40px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  border-radius: 50px;
  overflow: hidden;
  color: #ffffff;
  font-size: 13px;
  padding: 6px 8px;
`;

export const CoverTopActions = styled.div`
  position: absolute;
  top: 30px;
  left: 10px;
  right: 10px;
  display: flex;
  align-content: center;
  z-index: 1;
`;

export const TopActionBack = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
`;

export const TopActionFavorite = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
`;

export const CoverInfo = styled.div`
  position: relative;
  margin-top: -30px;
  overflow: hidden;
`;

export const CoverMainInfo = styled.div`
  padding: 10px 20px 20px;
  background-color: #fffbed;
  border-radius: 30px 30px 0 0;
`;

export const MainInfoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const MainInfoStatus = styled.span`
  font-size: 13px;
  line-height: 15px;
  color: #00bfa5;
`;

export const MainInfoLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 15px;
  border-radius: 50%;
  overflow: hidden;
  width: 36px;
  height: 36px;
  color: #00bfa5;
  flex: 0 0 auto;
  border: 1px solid grey;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const MainInfoTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 22px;
  line-height: 25px;
  font-weight: 600;
  color: #343434;
`;

export const MainInfoSub = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MainInfoSubItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
  font-size: 13px;
  line-height: 15px;
  color: rgba(52, 52, 52, 0.5);
  svg {
    margin-right: 7px;
  }
`;

export const MainInfoCategory = styled.div`
  display: flex;
  overflow-y: auto;
  margin-top: 15px;
`;

export const MainInfoCategoryItem = styled.span`
  padding: 6px 12px;
  margin-right: 10px;
  background-color: #ffeaa7;
  border-radius: 6px;
  border: 1px solid #ffeaa7;
`;

export const InfoBody = styled.div`
  padding: 25px 20px;
  background-color: #fff;
  font-size: 15px;
  line-height: 18px;
`;

export const BodyInfoItemWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const BodyInfoIcon = styled.div`
  width: 30px;
  flex: 0 0 auto;
`;

export const BodyInfoDetails = styled.div``;

export const BodyInfoAddress = styled.div``;

export const InfoAddressText = styled.div`
  margin-bottom: 5px;
`;

export const InfoAddressStation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const InfoAddressStationMark = styled.span`
  display: inline-block;
  margin-right: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

export const InfoAddressMapLink = styled.div`
  color: #00bfa5;
`;

export const BodyInfoTime = styled.div``;

export const BodyTimeStatus = styled.div`
  font-weight: 600;
`;

export const BodyActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  button {
    background-color: #fff6d9;
    width: calc(50% - 8px);
    color: #343434;
    span {
      display: inline-flex;
      align-items: center;
    }
    svg {
      margin-right: 7px;
    }
  }
`;

export const BodyDescription = styled.p`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(190, 194, 206, 0.3);
`;

export const BodyFeatures = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(190, 194, 206, 0.3);
`;

export const BodyFeaturesTitle = styled.h4`
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const BodyFeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BodyFeaturesItem = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  background-color: #fff6d9;
  padding: 5px 14px;
`;

export const BodyTrainers = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(190, 194, 206, 0.3);
`;

export const BodyTrainersTitle = styled.h4`
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const BodyTrainersText = styled.p`
  position: relative;
  color: rgba(52, 52, 52, 0.5);
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 30px;
  &:before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-top: 2px solid #00bfa5;
    border-right: 2px solid #00bfa5;
    right: 0;
    top: 5px;
    transform: rotate(45deg);
  }
`;

export const BodyReviews = styled.div`
  button {
    background-color: #fff6d9;
    color: #343434;
    width: 100%;
  }
`;

export const BodyReviewsTitle = styled.h4`
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const BodyReviewsList = styled.div`
  margin-bottom: 25px;
`;

export const BodyReviewsItem = styled.div``;

export const ReviewsItemHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ReviewsItemAvatar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
  text-transform: uppercase;
  background-color: #fff6d9;
`;

export const ReviewsItemName = styled.h5`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
`;

export const ReviewsItemText = styled.p`
  margin-bottom: 0;
`;
