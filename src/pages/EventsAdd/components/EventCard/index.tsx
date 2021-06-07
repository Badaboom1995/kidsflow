import React from "react";
import {
  Wrapper,
  CoverBlock,
  CoverImage,
  EventType,
  EventAge,
  InfoBlock,
  Description,
  Schedule,
  ScheduleItem,
  InfoItem,
} from "./styled";
import cover_img from "./cover_img.jpg";

function EventCard() {
  return (
    <Wrapper>
      <CoverBlock>
        <CoverImage src={cover_img} />
        <EventType>Фехтование</EventType>
        <EventAge>7-11 лет</EventAge>
      </CoverBlock>
      <InfoBlock>
        <InfoItem>СДЮШОР фехтования</InfoItem>
        <InfoItem>
          Приглашаются дети в возрасте с 5 до 12 лет на занятия в средние группы
          подготовки
        </InfoItem>
        <InfoItem>
          <Schedule>
            <ScheduleItem>5 ноября 10:00 </ScheduleItem>
            <ScheduleItem>Пн. - чт. с 09:00 - 15:00 </ScheduleItem>
            <ScheduleItem>Пят. с 9:00 - 21:00 </ScheduleItem>
          </Schedule>
        </InfoItem>
        <InfoItem>www.schoolfeht.ru</InfoItem>
      </InfoBlock>
    </Wrapper>
  );
}
export default EventCard;
