import React, { useState } from "react";
import { Wrapper, Content, Right, Left, Head, Uploads, Footer } from "./styled";
import BackSection from "parts/BackSection";
import FormGenerator from "parts/FormGenerator";
import EventCard from "./components/EventCard";
import UpoadFile from "parts/UpoadFile";
import { ButtonsArea, FormSectionTitle } from "parts/styled";
import Button from "parts/Button";

// TODO. Move to features
function EventsAdd() {
  const [generalRef, setGeneralRef] = useState(null);
  const [contactsRef, setContactsRef] = useState(null);
  const submitForm = () => {
    generalRef?.current.handleSubmit();
    contactsRef?.current.handleSubmit();
  };
  return (
    <Wrapper>
      {/* <RespondedList isVisible={true} changeVisibility={() => {}} /> */}
      <Head>
        <BackSection />
      </Head>
      <FormSectionTitle>Карточка события (251489):</FormSectionTitle>
      <Content>
        <Left>
          <FormGenerator
            setRef={setGeneralRef}
            config={{
              title: "Общее",
              fields: [
                { name: "name", label: "Название" },
                {
                  name: "type",
                  label: "Тип события",
                  type: "select",
                  options: [{ name: "qwe", value: "asd" }],
                },
                { name: "org", label: "Организация" },
                { name: "partner", label: "Партнер" },
                {
                  name: "number",
                  label: "Количество мест",
                  type: "select",
                  options: [{ name: "qwe", value: "asd" }],
                },
                { name: "date", label: "Дата проведения" },
                {
                  name: "ageFrom",
                  label: "Возраст от",
                  col: 3,
                  type: "select",
                  options: [{ name: "asds", value: "qwes" }],
                },
                {
                  name: "ageTo",
                  label: "Возраст до",
                  col: 3,
                  type: "select",
                  options: [{ name: "asds", value: "qwes" }],
                },
              ],
              settings: { defaultType: "text", defaultCol: 6 },
            }}
          />
          <FormGenerator
            setRef={setContactsRef}
            transparent={false}
            config={{
              title: "Контакты",
              fields: [
                { name: "adress", label: "Адрес проведения" },
                { name: "phone", label: "Телефон" },
                { name: "email", label: "Email" },
                { name: "site", label: "Сайт" },
              ],
              settings: { defaultType: "text", defaultCol: 6 },
            }}
          />

          <Uploads>
            <FormSectionTitle>Логотип</FormSectionTitle>
            <UpoadFile label="Добавить лого" />
            <UpoadFile label="Добавить фото" />
            <UpoadFile label="Добавить фото" />
            <UpoadFile label="Добавить фото" />
          </Uploads>
        </Left>
        <Right>
          <EventCard />
        </Right>
        <Footer>
          <ButtonsArea>
            <section>
              <Button onClick={submitForm}>Сохранить</Button>
              <Button type="ghost">Удалить анкету</Button>
            </section>
            <section>
              <Button type="ghost">Заблокировать</Button>
            </section>
          </ButtonsArea>
        </Footer>
      </Content>
    </Wrapper>
  );
}
export default EventsAdd;
