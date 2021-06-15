import React, { useEffect, useState } from "react";
import { Partners, PartnersField } from "../../styled";
import FormGenerator from "parts/FormGenerator";
import { Formik, Form } from "formik";
import Select from "parts/Select";
import { directions, getAge, getSchedule } from "config/constants";
import organizationsService from "services/organizations";
import { FormSectionTitle } from "parts/styled";
import directionsService from "services/directions";
import { useDispatch, useSelector } from "react-redux";
import { chooseDirection } from "../../duck/slice";
import { directionSelector } from "../../duck/selectors";
import { Subtitle, Space } from "./styled";

function GeneralForm({ initialData, setGeneral, setRef, choosePartner }) {
  const [partners, setPartners] = useState(null);
  const [kinds, setKinds] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const direction = useSelector(directionSelector);

  useEffect(() => {
    directionsService.getList(1).then((result) => {
      setKinds(
        result.data.map((item) => ({
          name: item.name,
          value: item.eventDirectionId,
        }))
      );
    });
    organizationsService.partnersList().then((result) => {
      setPartners(
        result.data.list.map((item) => ({
          name: item.partner.firstName,
          value: item.partner.partnerId,
        }))
      );
    });
  }, []);

  useEffect(() => {
    directionsService.getList(2).then((result) => {
      console.log(result);
      setCategory(
        result.data
          .filter((item) => item.parentId === direction)
          .map((item) => ({
            name: item.name,
            value: item.eventDirectionId,
          }))
      );
    });
  }, [direction]);

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
        side: (e) => {
          dispatch(chooseDirection(e.target.value));
        },
        options: kinds || [],
      },
      {
        name: "category",
        label: "Категория",
        type: "select",
        options: category || [],
      },
      {
        name: "businessHours",
        yup: [{ key: "optional", args: [] }],
        label: (
          <div>
            Расписание<Subtitle>пн - пт</Subtitle>
          </div>
        ),
        type: "select",
        options: getSchedule(),
      },
      {
        name: "ageFrom",
        label: (
          <div>
            Возраст<Subtitle>от</Subtitle>
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
            <Space />
            <Subtitle>до</Subtitle>
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
                name="partnerId"
                side={(e) => choosePartner(e.target.value)}
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
