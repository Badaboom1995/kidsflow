import React, { useRef, useEffect, useState } from "react";
import {
  Wrapper,
  Title,
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
import { GlassCard, Status, Tariff } from "parts/styled";
import Button from "parts/Button";
import { Label } from "parts/styled";
import UpoadFile from "parts/UpoadFile";
import FormGenerator from "parts/FormGenerator";
import { addChildData } from "./duck/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectChildrenArray } from "./duck/selectors";
import BackSection from "parts/BackSection";
function AddUserFormView() {
  const dispatch = useDispatch();
  const children = useSelector(selectChildrenArray);
  // TODO. Is there another way to do multiple forms?
  const userFormRef: any = useRef();
  const childFormRef: any = useRef();
  const [userFormCurrent, setUserSubmit] = useState({ handleSubmit: () => {} });
  const [childFormCurrrent, setChildSubmit] = useState({
    handleSubmit: () => {},
  });
  useEffect(() => {
    if (userFormRef.current) {
      setUserSubmit(userFormRef.current);
    }
  }, [userFormRef]);
  useEffect(() => {
    if (childFormRef.current) {
      setChildSubmit(childFormRef.current);
    }
  }, [childFormRef]);
  const submitChildData = (values) => {
    dispatch(addChildData(values));
  };

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
            <AddFormButton onClick={childFormCurrrent.handleSubmit}>
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
          <Title>Пользователь (id 6942719):</Title>
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
            FormRef={userFormRef}
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
          <Title>Анкета ребенка (421123):</Title>
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
            FormRef={childFormRef}
            onSubmit={submitChildData}
          />
        </Left>
        <Right>
          <Title>Фото:</Title>
          <MediaSection>
            <MediaRow>
              <UpoadFile label="Добавить фото" />
              <UpoadFile label="Добавить фото" />
            </MediaRow>
            <MediaRow>
              <UpoadFile label="Добавить фото" />
              <UpoadFile label="Добавить фото" />
            </MediaRow>
            <Title>Видео:</Title>
            <MediaRow>
              <UpoadFile label="Добавить видео" />
              <UpoadFile label="Добавить видео" />
            </MediaRow>
          </MediaSection>
        </Right>
      </Content>
      <Footer>
        <Button onClick={userFormCurrent.handleSubmit}>Сохранить</Button>
        <Button type="ghost">Удалить анкету</Button>
      </Footer>
    </Wrapper>
  );
}
export default AddUserFormView;
