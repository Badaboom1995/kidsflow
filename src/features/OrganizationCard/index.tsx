import React, { useState } from "react";
import {
  Wrapper,
  Address,
  AddressText,
  Main,
  Title,
  Description,
  SiteLink,
  Schedule,
  Phone,
  ScheduleText,
  Number,
  ToggleButton,
  Left,
  Right,
  Cover,
} from "./styled";
import { MainSubtitle } from "parts/typography";
import feht from "./feht.jpg";

function OrganizationCard() {
  const [hidePhone, setPhone] = useState(true);
  return (
    <Wrapper>
      <Left>
        <Address>
          <MainSubtitle>Адрес</MainSubtitle>
          <AddressText>Петровский бульвар 15, стр. 1</AddressText>
        </Address>
        <Main>
          <Title>СДЮШОР фехтования</Title>
          <Description>
            Индивидуальные занятия фехтованием с профессиональным тренером.
            Займитесь динамичным видом спорта! Индивидуальные тренировки помогут
            добиться максимального результата за короткое время!
          </Description>
          <SiteLink>www.schoolfeht.ru</SiteLink>
        </Main>
        <Schedule>
          <MainSubtitle>Режим работы</MainSubtitle>
          <ScheduleText>Каждый день с 11:00 - 20:00</ScheduleText>
        </Schedule>
      </Left>
      <Right>
        <Cover>
          <img src={feht} alt="" />
        </Cover>
        <Phone closed={hidePhone}>
          <MainSubtitle>контакты</MainSubtitle>
          <Number>7 (495) 380 44 99</Number>
          <ToggleButton
            onClick={() => {
              setPhone(!hidePhone);
            }}
          >
            Показать
          </ToggleButton>
        </Phone>
      </Right>
    </Wrapper>
  );
}
export default OrganizationCard;
