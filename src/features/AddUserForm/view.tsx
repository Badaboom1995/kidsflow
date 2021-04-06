import React, { useState } from "react";
import {
  Wrapper,
  AddFormButton,
  Content,
  Left,
  Right,
  Top,
  Interests,
  MediaSection,
  MediaRow,
  Header,
  StatusSection,
  Footer,
  ChildArea,
  ChildData,
  ChildType,
  Name,
} from "./styled";
import {
  ButtonsArea,
  FormSectionTitle,
  GlassCard,
  Status,
  Tariff,
} from "parts/styled";
import Button from "parts/Button";
import { Label } from "parts/styled";
import UpoadFile from "parts/UpoadFile";
import FormGenerator from "parts/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { selectChildrenArray } from "./duck/selectors";
import BackSection from "parts/BackSection";
import { addChildData } from "./duck/slice";

// TODO. separate logic and view
function AddUserFormView() {
  const dispatch = useDispatch();
  const children = useSelector(selectChildrenArray);
  // TODO. Is there another way to do multiple forms?

  const [userFormRef, setUserRef] = useState(null);
  const [childFormRef, setChildRef] = useState(null);

  return (
    <Wrapper>
      <BackSection />
      <Header>
        <ChildArea>
          {children.map((item) => (
            <ChildData>
              <Name>{`${item.name} ${item.surname}`}</Name>
              <ChildType>Кастинг</ChildType>
            </ChildData>
          ))}
          <GlassCard style={{ marginRight: "10px" }}>
            <AddFormButton onClick={childFormRef?.current.handleSubmit}>
              добавить анкету ребенка
            </AddFormButton>
          </GlassCard>
        </ChildArea>
        <StatusSection>
          <Status active style={{ marginRight: "10px" }}>
            Активен
          </Status>
          <Tariff type="premium">Premium</Tariff>
        </StatusSection>
      </Header>
      <Content>
        <Top>
          <FormSectionTitle>Пользователь (id 6942719):</FormSectionTitle>
        </Top>
        <Left>
          <FormGenerator
            config={{
              settings: {
                defaultType: "text",
                defaultCol: 6,
              },
              fields: [
                { name: "fullName", label: "ФИО" },
                { name: "phone", label: "Телефон" },
                { name: "email", label: "E-mail" },
                { name: "login", label: "Логин" },
                { name: "password", label: "Пароль" },
              ],
            }}
            setRef={setUserRef}
          />
        </Left>
        <Right>
          <GlassCard fullWidth>
            <Label>Интересы</Label>
            <Interests>
              <span>One</span>
              <span>One</span>
              <span>One</span>
              <span>One</span>
            </Interests>
          </GlassCard>
        </Right>
      </Content>
      <Content>
        <Top>
          <FormSectionTitle>Анкета ребенка (421123):</FormSectionTitle>
        </Top>
        <Left>
          <FormGenerator
            config={{
              settings: {
                defaultType: "text",
                defaultCol: 6,
              },
              fields: [
                { name: "name", label: "Имя" },
                { name: "surname", label: "Фамилия" },
                {
                  name: "hairColor",
                  options: [{ name: "asd", value: "some" }],
                  label: "Цвет волос",
                  col: 3,
                  type: "select",
                },
                {
                  name: "hairLength",
                  label: "Длина волос",
                  options: [{ name: "asd", value: "some" }],
                  col: 3,
                  type: "select",
                },
                {
                  name: "gender",
                  label: "Пол",
                  col: 3,
                  options: [
                    { name: "asd", value: "some" },
                    { name: "qew", value: "123" },
                  ],
                  type: "select",
                },
                {
                  name: "height",
                  label: "Рост",
                  options: [{ name: "asd", value: "some" }],
                  col: 3,
                  type: "select",
                },
                { name: "eyeColor", label: "Цвет глаз" },
                { name: "birthDate", label: "Дата рождения" },
                { name: "socialLinks", label: "Соц.сети" },
                { name: "experience", label: "Опыт" },
                { name: "skills", label: "Навыки" },
                { name: "apperanceType", label: "Тип внешности" },
              ],
            }}
            onSubmit={(values) => {
              dispatch(addChildData(values));
            }}
            setRef={setChildRef}
          />
        </Left>
        <Right>
          <FormSectionTitle>Фото:</FormSectionTitle>
          <MediaSection>
            <MediaRow>
              <UpoadFile label="Добавить фото" />
              <UpoadFile label="Добавить фото" />
            </MediaRow>
            <MediaRow>
              <UpoadFile label="Добавить фото" />
              <UpoadFile label="Добавить фото" />
            </MediaRow>
            <FormSectionTitle>Видео:</FormSectionTitle>
            <MediaRow>
              <UpoadFile label="Добавить видео" />
              <UpoadFile label="Добавить видео" />
            </MediaRow>
          </MediaSection>
        </Right>
      </Content>
      <ButtonsArea>
        <section>
          <Button onClick={userFormRef?.current.handleSubmit}>Сохранить</Button>
          <Button type="ghost">Удалить анкету</Button>
        </section>
        <section>
          <Button type="ghost">История откликов</Button>
          <Button type="ghost">Заблокировать</Button>
        </section>
      </ButtonsArea>
    </Wrapper>
  );
}
export default AddUserFormView;
