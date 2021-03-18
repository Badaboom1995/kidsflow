import React from "react";
import { Wrapper, Content, Cover, Date, Title, Text, Item } from "./styled";
import { MainTitle } from "parts/typography";
import Button from "parts/Button";
import tempCover from "./tempCover.png";

function News() {
  return (
    <Wrapper>
      <MainTitle>Новости</MainTitle>
      <Item>
        <Cover src={tempCover} />
        <Content>
          <Date>16.12.20</Date>
          <Title>10 000 активных участников</Title>
          <Text>
            В этот день в нашем приложение было зарегистрировано 10 000 разных
            участников. Этот радостный момент мы хотим разделить совместно с
            нашими пользователями.
          </Text>
          <Button size="small" type="transparent">
            Читать новость полностью
          </Button>
        </Content>
      </Item>
      <Item>
        <Cover src={tempCover} />
        <Content>
          <Date>16.12.20</Date>
          <Title>10 000 активных участников</Title>
          <Text>
            В этот день в нашем приложение было зарегистрировано 10 000 разных
            участников. Этот радостный момент мы хотим разделить совместно с
            нашими пользователями.
          </Text>
          <Button size="small" type="transparent">
            Читать новость полностью
          </Button>
        </Content>
      </Item>
      <Item>
        <Cover src={tempCover} />
        <Content>
          <Date>16.12.20</Date>
          <Title>10 000 активных участников</Title>
          <Text>
            В этот день в нашем приложение было зарегистрировано 10 000 разных
            участников. Этот радостный момент мы хотим разделить совместно с
            нашими пользователями.
          </Text>
          <Button size="small" type="transparent">
            Читать новость полностью
          </Button>
        </Content>
      </Item>
    </Wrapper>
  );
}
export default News;
