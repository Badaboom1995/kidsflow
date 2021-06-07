import React, { useEffect, useState } from "react";
import {
  Wrapper,
  MainArea,
  Left,
  Right,
  Row,
  Docs,
  Partners,
  PartnersField,
  Header,
} from "./styled";
import FormGenerator from "parts/FormGenerator";
import BackSection from "parts/BackSection";
import { FormSectionTitle, ButtonsArea } from "parts/styled";
import UpoadFile from "parts/UpoadFile";
import Button from "parts/Button";
import Tabs from "parts/Tabs";
import StatusHandler from "parts/StatusHandler";
import { toast } from "react-toastify";
import Select from "parts/Select";
import { Formik, Form } from "formik";
import { directions, getAge, getSchedule } from "config/constants";
import organizationsService from "services/organizations";

function AddOrgView({
  partners,
  initialData,
}: {
  partners: { name: string; value: string }[];
  initialData?: {
    general: any;
    contacts: any;
    legal: any;
    id: string;
    partner: string;
  };
}) {
  const submitMethod = initialData
    ? organizationsService.update
    : organizationsService.create;

  const [generalRef, setGeneralRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [formalRef, setFormalRef] = useState(null);

  const [status, setStatus] = useState(0);

  const [generalData, setGeneral] = useState(null);
  const [contactData, setContact] = useState(null);
  const [formalData, setFormal] = useState(null);

  const [formCompleted, setCompleted] = useState(null);

  const submitAll = () => {
    generalRef?.current?.handleSubmit();
    contactRef?.current?.handleSubmit();
    formalRef?.current?.handleSubmit();
  };

  useEffect(() => {
    if (!generalData && !contactData && !formalData) return;
    if (generalData && contactData) {
      setCompleted(true);
      submitMethod(
        {
          ...generalData,
          ...contactData,
          ...formalData,
          businessHours: [
            {
              day: 0,
              openTime: "10:00",
              closeTime: "19:00",
            },
          ],
          directions: ["Sport"],
          uploadIds: [],
          partnerId: "2d83d926-c148-4884-98a8-c398c7ff6327",
          status,
        },
        initialData.id
      );

      setTimeout(() => {
        submitAll();
        toast.success("Готово!");
      }, 100);
      return;
    }

    if (!generalData || !contactData) {
      toast.error("Заполните все поля");
    }
  }, [generalData, contactData, formalData]);

  return (
    <Wrapper>
      <BackSection />
      <Header>
        <Left>
          <FormSectionTitle offsetLeft={60}>
            Карточка организации (251489):
          </FormSectionTitle>
        </Left>
        <Right>
          <StatusHandler
            onChange={(status) => {
              const statusId = status === "disabled" ? 0 : 1;
              setStatus(statusId);
            }}
            options={[
              { name: "Заблокирован", status: "disabled" },
              { name: "Активен", status: "active" },
            ]}
            current="Активен"
          />
        </Right>
      </Header>
      <MainArea>
        <Left>
          <Tabs
            tabs={[
              {
                id: 1,
                name: "Общее",
                content: (activeId, tabId) => (
                  // *** GENERAL CONTENT ***
                  <div
                    style={{ display: activeId === tabId ? "block" : "none" }}
                  >
                    <FormGenerator
                      resetOnSubmit={formCompleted}
                      config={{
                        title: "Общее",
                        settings: { defaultType: "text", defaultCol: 6 },
                        fields: [
                          { name: "name", label: "Название" },
                          { name: "about", label: "Описание" },
                          {
                            name: "directions",
                            label: "Направление",
                            type: "select",
                            options: directions,
                          },
                          {
                            name: "category",
                            label: "Категория",
                            type: "select",
                            options: [
                              { name: "Английский", value: "1" },
                              { name: "Испанский", value: "2" },
                              { name: "Китайский", value: "3" },
                            ],
                          },
                          {
                            name: "businessHours",
                            label: (
                              <div>
                                Расписание<div>неделя</div>
                              </div>
                            ),
                            type: "select",
                            options: getSchedule(),
                          },

                          {
                            name: "ageFrom",
                            label: (
                              <div>
                                Возраст<div>от</div>
                              </div>
                            ),
                            type: "select",
                            col: 3,
                            options: getAge(25),
                          },
                          {
                            name: "ageTo",
                            label: (
                              <div>
                                Возраст<div>до</div>
                              </div>
                            ),
                            type: "select",
                            col: 3,
                            options: getAge(25),
                          },
                        ],
                      }}
                      onSubmit={(values) => {
                        setGeneral(values);
                      }}
                      initialValues={initialData.general}
                      setRef={setGeneralRef}
                    />

                    <Partners>
                      <FormSectionTitle offsetLeft={40} marginBottom={20}>
                        Партнеры
                      </FormSectionTitle>
                      <PartnersField>
                        <Formik
                          onSubmit={() => {}}
                          initialValues={{ partners: initialData.partner }}
                        >
                          <Form>
                            <Select
                              title={"Выбрать..."}
                              onChange={() => {}}
                              options={partners || []}
                              name="partners"
                              value={initialData.partner}
                            />
                          </Form>
                        </Formik>
                      </PartnersField>
                    </Partners>
                    <Row>
                      <UpoadFile label="Добавить логотип" />
                      <UpoadFile label="Добавить фото" />
                      <UpoadFile label="Добавить фото" />
                      <UpoadFile label="Добавить фото" />
                    </Row>
                  </div>
                  // *** GENERAL CONTENT ***
                ),
              },
              {
                id: 2,
                name: "Контакты",
                content: (activeId, tabId) => (
                  // *** CONTACTS CONTENT ***
                  <div
                    style={{ display: activeId === tabId ? "block" : "none" }}
                  >
                    <FormGenerator
                      resetOnSubmit={formCompleted}
                      config={{
                        title: "Контакты",
                        settings: { defaultType: "text", defaultCol: 6 },
                        fields: [
                          { name: "address", label: "Адрес" },
                          { name: "phoneNumber", label: "Телефон" },
                          { name: "email", label: "Email" },
                          { name: "site", label: "Сайт" },
                        ],
                      }}
                      onSubmit={(values) => {
                        setContact(values);
                      }}
                      setRef={setContactRef}
                      initialValues={initialData.contacts}
                    />
                  </div>
                  // *** CONTACTS CONTENT ***
                ),
              },
              {
                id: 3,
                name: "Юридические данные",
                content: (activeId, tabId) => (
                  // *** DATA CONTENT ***
                  <div
                    style={{ display: activeId === tabId ? "block" : "none" }}
                  >
                    <FormGenerator
                      resetOnSubmit={formCompleted}
                      config={{
                        title: "Юридические данные",
                        settings: { defaultType: "text", defaultCol: 6 },
                        fields: [
                          {
                            name: "entity",
                            label: "Юр.Лицо",
                          },
                          {
                            name: "accountAddress",
                            label: "Расчетный счет",
                          },
                          {
                            name: "taxIdNumber",
                            label: "ИНН",
                          },
                          {
                            name: "primaryStateNumber",
                            label: "ОГРН",
                          },
                          {
                            name: "legalAddress",
                            label: "Юр. адрес",
                          },
                        ],
                      }}
                      onSubmit={(values) => {
                        setFormal(values);
                      }}
                      setRef={setFormalRef}
                    />
                    <Row>
                      <FormSectionTitle>Документы:</FormSectionTitle>
                      <Docs>
                        <UpoadFile label="Добавить документ" file />
                        <UpoadFile label="Добавить документ" file />
                        <UpoadFile label="Добавить документ" file />
                      </Docs>
                    </Row>
                  </div>
                  // *** DATA CONTENT ***
                ),
              },
            ]}
            activeId={1}
          />
        </Left>
        <Right></Right>
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
