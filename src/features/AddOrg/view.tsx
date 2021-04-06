import React, { useState } from "react";
import { Wrapper, MainArea, Left, Right, Row } from "./styled";
import FormGenerator from "parts/FormGenerator";
import BackSection from "parts/BackSection";
import { FormSectionTitle, ButtonsArea } from "parts/styled";
import UpoadFile from "parts/UpoadFile";
import Button from "parts/Button";
import DoubleInput from "parts/DoubleInput";

function AddOrgView() {
  const [generalRef, setGeneralRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [formalRef, setFormalRef] = useState(null);
  const submitAll = () => {
    generalRef?.current.handleSubmit();
    contactRef?.current.handleSubmit();
    formalRef?.current.handleSubmit();
  };
  return (
    <Wrapper>
      <BackSection />
      <FormSectionTitle offsetLeft={60}>
        Карточка организации (251489):
      </FormSectionTitle>
      <MainArea>
        <Left>
          <FormGenerator
            config={{
              title: "Общее",
              settings: { defaultType: "text", defaultCol: 6 },
              fields: [
                { name: "name", label: "Название" },
                {
                  name: "ageFrom",
                  label: "Возраст от",
                  type: "select",
                  col: 3,
                  options: [{ name: "asd", value: "qwew" }],
                },
                {
                  name: "ageTo",
                  label: "Возраст до",
                  type: "select",
                  col: 3,
                  options: [{ name: "asd", value: "qwew" }],
                },
                { name: "description", label: "Описание" },
                { name: "directions", label: "Направления" },
                {
                  name: "schedule",
                  label: "Расписание",
                  type: "select",
                  options: [{ name: "asd", value: "qwew" }],
                },
                {
                  name: "category",
                  label: "Категория",
                },
              ],
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            setRef={setGeneralRef}
          />
        </Left>
        <Right>
          <FormSectionTitle offsetLeft={40} marginBottom={20}>
            Организаторы
          </FormSectionTitle>
          <DoubleInput />
        </Right>
        <Left>
          <FormGenerator
            config={{
              title: "Контакты",
              settings: { defaultType: "text", defaultCol: 6 },
              fields: [
                { name: "adress", label: "Адрес" },
                { name: "phone", label: "Телефон" },
                { name: "email", label: "Email" },
                { name: "site", label: "Сайт" },
              ],
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            setRef={setContactRef}
          />
          <FormGenerator
            config={{
              title: "Юридические данные",
              settings: { defaultType: "text", defaultCol: 6 },
              fields: [
                { name: "formalName", label: "Юр.Лицо" },
                { name: "billingAdress", label: "Расчетный счет" },
                { name: "INN", label: "ИНН" },
                { name: "OGRN", label: "ОГРН" },
                { name: "formalAdress", label: "Юр. адрес" },
              ],
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            setRef={setFormalRef}
          />
        </Left>
        <Right>
          <Row>
            <FormSectionTitle>Логотип</FormSectionTitle>
            <UpoadFile label="Добавить логотип" />
          </Row>
          <Row>
            <FormSectionTitle>фото:</FormSectionTitle>
            <UpoadFile label="Добавить фото" />
            <UpoadFile label="Добавить фото" />
            <UpoadFile label="Добавить фото" />
          </Row>
          <Row>
            <FormSectionTitle>Документы:</FormSectionTitle>
            <UpoadFile label="Добавить документ" file />
            <UpoadFile label="Добавить документ" file />
            <UpoadFile label="Добавить документ" file />
          </Row>
        </Right>
      </MainArea>
      <ButtonsArea>
        <section>
          <Button onClick={submitAll}>Сохранить</Button>
          <Button>Добавить событие</Button>
        </section>
        <section>
          <Button type="ghost">Заблокировать</Button>
        </section>
      </ButtonsArea>
    </Wrapper>
  );
}
export default AddOrgView;
