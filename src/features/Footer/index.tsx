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
  BottomLinks,
} from "./styled";
import { Container } from "parts/styled";

import apple from "./assets/apple.png";
import google from "./assets/google.png";
import vk from "./assets/one.svg";
import inst from "./assets/two.svg";
import facebook from "./assets/three.svg";

function Footer() {
  return (
    <Wrapper>
      <Container>
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
              <TextLink icon={vk}>ВКонтакте</TextLink>
              <TextLink icon={inst}>Инстаграм</TextLink>
              <TextLink icon={facebook}>Фейсбук</TextLink>
            </Column>
          </InfoLinks>
          <Download>
            <DownloadLink src={apple} />
            <DownloadLink src={google} />
          </Download>
        </Links>
        <Extra>
          <Description>
            <span>Взлетаем!</span> – приложение, которое помогает найти события,
            школы, кружки и студии для досуга детей, 2021г.
          </Description>
          <BottomLinks>
            <TextLink>Инвесторы</TextLink>
            <TextLink>Реклама в приложении</TextLink>
          </BottomLinks>
          <Logo />
        </Extra>
      </Container>
    </Wrapper>
  );
}
export default Footer;
