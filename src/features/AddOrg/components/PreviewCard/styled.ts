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

export const PhoneInfoImage = styled.img`
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const CoverImage = styled.div`
  width: 100%;
  position: sticky;
  height: 340px;
  top: 0;
  &:before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-image: url("../../../../common/images/svg/phone-top-actions.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 1;
  }
  .slick-slider_wrapper{
    height: 100%;
  }
  .slick-slider_fade-block{
    display: none;
  }
  .event-card_slider__wrapper{
    height: 100%;
    .slick-list{
      height: 100%;
    }
    .slick-track{
      height: 100%;
    }
    .slick-slide{
      & > div{
        height: 100%;
        position: relative;
        overflow: hidden;
      }
      img{
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
    .slick-arrow{
      background: rgba(0, 0, 0, 0.3);
      width: 30px;
      height: 30px;
      &:before{
        width: 50%;
        height: 50%;
      }
      &.slick-prev{
        left: 0;
        transform: translate(10px, -50%) rotate(180deg);
      }
      &.slick-next{
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

export const Image = styled.img`
  width: 100%;
`;

export const CoverTopActions = styled.div`
  position: absolute;
  top: 35px;
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
  background: rgba(255,255,255, .3);
  border-radius: 8px;
`;

export const TopActionFavorite = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(255,255,255, .3);
  border-radius: 8px;
`;

export const CoverInfo = styled.div`
  position: relative;
  margin-top: -30px;
  overflow: hidden;
`;

export const CoverMainInfo = styled.div`
  padding: 30px 20px;
  background-color: #FFFBED;
  border-radius: 30px 30px 0 0;
  border-bottom: 2px solid #FFEAA7;
`;

export const MainInfoTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
  line-height: 25px;
  font-weight: 600;
  color: #343434;
`;

export const MainInfoCategory = styled.div`
  display: flex;
  overflow-y: auto;
  margin-top: 15px;
`;

export const MainInfoCategoryItem = styled.span`
  padding: 6px 12px;
  margin-right: 10px;
  background-color: #FFEAA7;
  border-radius: 6px;
  border: 1px solid #FFEAA7;
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

export const InfoAddressMapLink = styled.div`
  color: #00BFA5;
`;

export const BodyInfoTime = styled.div``;

export const BodyTimeStatus = styled.div`
  font-weight: 600;
`;

export const BodyDescriptionWrapper = styled.div``;

export const BodyDescriptionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 17px;
  font-weight: 600;
  text-transform: uppercase;
  color: #BEC2CE;
`;

export const BodyDescriptionText = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: #343434;
`;

export const ContactsWrapper = styled.div`
  position: sticky;  
  bottom: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  button{
    width: calc(100% - 40px);
    border-radius: 12px;
    padding: 14px 20px;
    font-size: 16px;
    line-height: 18px;
    color: #343434;
    text-transform: unset;
  }
`;
