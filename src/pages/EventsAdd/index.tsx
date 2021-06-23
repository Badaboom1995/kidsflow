import React, {useState, useRef, useEffect} from "react";

import BackSection from "parts/BackSection";
import FormGenerator from "parts/FormGenerator";
import UpoadFile from "parts/UpoadFile";
import { ButtonsArea, FormSectionTitle } from "parts/styled";
import Button from "parts/Button";
import EventCard from "./components/EventCard";

import {Wrapper, Content, Right, Left, Head, Uploads, Footer, LeftInner} from "./styled";
import {IFormContactsState, IFormState} from "./types";


// TODO. Move to features
function EventsAdd() {
  const [generalRef, setGeneralRef] = useState(null);
  const [contactsRef, setContactsRef] = useState(null);
  const [formState, setFormState] = useState<IFormState>();
  const [formContactsState, setFormContactsState] = useState<IFormContactsState>();

  const refLeftElement = useRef<HTMLDivElement>(null);
  const [maxRightContentHeight, setMaxRightContentHeight] = useState<number>()


  useEffect(() => {
    if(refLeftElement.current){
      setMaxRightContentHeight(refLeftElement.current.clientHeight)
    }
  })

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
      <Content>
        <Left>
          <LeftInner ref={refLeftElement}>
            <FormSectionTitle>Карточка события (251489):</FormSectionTitle>
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
                    options: [
                      { name: "sport", value: "sport" },
                      { name: "ne_sport", value: "ne_sport" },
                      { name: "do_sport", value: "do_sport" },
                      { name: "tam_sport", value: "tam_sport" },
                    ],
                  },
                  { name: "org", label: "Организация" },
                  { name: "partner", label: "Партнер" },
                  {
                    name: "number",
                    label: "Количество мест",
                    type: "select",
                    options: [
                      { name: "1", value: "1" },
                      { name: "2", value: "2" },
                      { name: "3", value: "3" },
                      { name: "4", value: "4" },
                      { name: "5", value: "5" },
                      { name: "6", value: "6" },
                    ],
                  },
                  { name: "date", label: "Дата проведения" },
                  {
                    name: "ageFrom",
                    label: "Возраст от",
                    col: 3,
                    type: "select",
                    options: [
                      { name: "1", value: "1" },
                      { name: "2", value: "2" },
                      { name: "3", value: "3" },
                      { name: "4", value: "4" },
                      { name: "5", value: "5" }
                    ],
                  },
                  {
                    name: "ageTo",
                    label: "Возраст до",
                    col: 3,
                    type: "select",
                    options: [
                      { name: "1", value: "1" },
                      { name: "2", value: "2" },
                      { name: "3", value: "3" },
                      { name: "4", value: "4" },
                      { name: "5", value: "5" }
                    ],
                  },
                  {
                    name: "category",
                    label: "Категории",
                    type: "chips",
                    options:[
                      { name: "aaa1", value: "aaa1" },
                      { name: "bbb2", value: "bbb2" },
                      { name: "ccc3", value: "ccc3" },
                      { name: "ddd4", value: "ddd4" },
                      { name: "eee5", value: "eee5" }
                    ]
                  }
                ],
                settings: { defaultType: "text", defaultCol: 6 },
              }}
              setFormState={setFormState}
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
              setFormState={setFormContactsState}
            />

            <Uploads>
              <FormSectionTitle>Логотип</FormSectionTitle>
              <UpoadFile label="Добавить лого" />
              <UpoadFile label="Добавить фото" />
              <UpoadFile label="Добавить фото" />
              <UpoadFile label="Добавить фото" />
            </Uploads>
          </LeftInner>
        </Left>
        <Right>
          <FormSectionTitle>отображение в приложении</FormSectionTitle>
          <EventCard
            maxRightContentHeight={maxRightContentHeight}
            formState={formState}
            formContactsState={formContactsState}
          />
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
