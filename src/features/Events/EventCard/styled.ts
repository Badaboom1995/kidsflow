import styled from "styled-components";
import calendar from "../assets/calendar.svg";

export const Wrapper = styled.div`
  width: 315px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  margin: 20px;
  margin-right: 30px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  /* min-height: 315px; */
`;
export const CoverBlock = styled.div`
  width: 100%;
  position: relative;
`;
export const CoverImage = styled.img`
  width: 100%;
`;
export const Parameter = styled.span`
  position: absolute;
  bottom: 0;
  width: 120px;
  padding: 6px 0;
  text-align: center;
  background: #ffc40080;
  border-radius: 0px 14px 0px 0px;
  color: #fff;
  font-size: 10px;
`;
export const EventType = styled(Parameter)`
  left: 0;
  text-transform: uppercase;
`;
export const EventAge = styled(Parameter)`
  right: 0;
  border-radius: 14px 0px 0px 0px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
`;
export const InfoBlock = styled.div`
  padding: 15px;
`;
export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 12px;
  margin-top: 0;
`;
export const Schedule = styled.div`
  position: relative;
  padding-left: 25px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 16px;
    height: 14px;
    background-image: url(${calendar});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const ScheduleItem = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
`;
