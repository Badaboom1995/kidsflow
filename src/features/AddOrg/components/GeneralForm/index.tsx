import React, { useEffect, useState } from "react";
import { Partners, PartnersField } from "../../styled";
import FormGenerator from "parts/FormGenerator";
import { Formik, Form } from "formik";
import Select from "parts/Select";
import { directions, getAge, getSchedule } from "config/constants";
import organizationsService from "services/organizations";
import { FormSectionTitle } from "parts/styled";

function GeneralForm({ initialData, formCompleted, setGeneral, setRef }) {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    organizationsService.partnersList().then((result) => {
      setPartners(
        result.data.list.map((item) => ({
          name: item.partner.firstName,
          value: item.partner.partnerId,
        }))
      );
    });
  }, []);

  const config: any = {
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
  };
  return (
    <>
      <FormGenerator
        resetOnSubmit={formCompleted}
        config={config}
        onSubmit={(values) => {
          setGeneral(values);
        }}
        initialValues={initialData}
        setRef={setRef}
      />
      <Partners>
        <FormSectionTitle offsetLeft={40} marginBottom={20}>
          Партнеры
        </FormSectionTitle>
        <PartnersField>
          <Formik
            onSubmit={() => {}}
            initialValues={{ partners: initialData?.partner }}
          >
            <Form>
              <Select
                title={"Выбрать..."}
                onChange={() => {}}
                options={partners || []}
                name="partners"
                value={initialData?.partnerId}
              />
            </Form>
          </Formik>
        </PartnersField>
      </Partners>
    </>
  );
}
export default GeneralForm;
