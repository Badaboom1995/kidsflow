import Logo from "parts/Logo";
import React from "react";
import {
  Wrapper,
  InfoLinks,
  Links,
  Column,
  ColTitle,
  TextLink,
  Download,
  DownloadLink,
  Extra,
  Description,
} from "./styled";
import { GlobalContainer } from "parts/styled";

import apple from "./assets/apple.png";
import google from "./assets/google.png";

function Footer() {
  return (
    <Wrapper>
      <GlobalContainer>
        <Links>
          <InfoLinks>
            <Column>
              <ColTitle>О Взлетаем!</ColTitle>
              <TextLink>О проекте</TextLink>
              <TextLink>Пользовательское соглашение</TextLink>
              <TextLink>Политика конфиденциальности</TextLink>
            </Column>
            <Column>
              <ColTitle>Пользователям</ColTitle>
              <TextLink>Вопросы и ответы</TextLink>
              <TextLink>Связаться с нами</TextLink>
              <TextLink>Условия использования</TextLink>
            </Column>
            <Column>
              <ColTitle>Сообщество</ColTitle>
              <TextLink>ВКонтакте</TextLink>
              <TextLink>Инстаграм</TextLink>
              <TextLink>Фейсбук</TextLink>
            </Column>
          </InfoLinks>
          <Download>
            <DownloadLink src={apple} />
            <DownloadLink src={google} />
          </Download>
        </Links>
        <Extra>
          <Description>
            Взлетаем! – приложение, которое помогает найти события, школы,
            кружки и студии для досуга детей, 2021г.
          </Description>
          <TextLink>Инвесторы</TextLink>
          <TextLink>Реклама в приложении</TextLink>
          <Logo />
        </Extra>
      </GlobalContainer>
    </Wrapper>
  );
}
export default Footer;
