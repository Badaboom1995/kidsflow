import React, { useEffect, useState } from "react";
import { Partners, PartnersField } from "../../styled";
import FormGenerator from "parts/FormGenerator";
import { Formik, Form } from "formik";
import Select from "parts/Select";
import { getAge, getSchedule } from "config/constants";
import { FormSectionTitle } from "parts/styled";
import { useDispatch, useSelector } from "react-redux";

import {
  currentOrganizationSelector,
  directionSelector,
  loadingSelector,
  categorySelector,
  partnerSelector,
  currentDirectionSelector,
} from "../../duck/selectors";
import { Subtitle, Space } from "./styled";
import { getCategories } from "features/AddOrg/duck/actions";

function GeneralForm({ setGeneral, setRef, choosePartner }) {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const directionsDict = useSelector(directionSelector);
  const categoriesDict = useSelector(categorySelector);
  const partners = useSelector(partnerSelector);
  const rawData = useSelector(currentOrganizationSelector);
  const currentDirection = useSelector(currentDirectionSelector);

  const { about, name, ageFrom, ageTo, partner, directions } = rawData || {};

  const generalData = {
    about,
    name,
    directions:
      currentDirection ||
      directions?.find((item) => !item.parentId).eventDirectionId,
    category: directions?.find((item) => item.parentId).eventDirectionId,
    businessHours: "",
    ageFrom: ageFrom?.toString(),
    ageTo: ageTo?.toString(),
    partnerId: partner?.partnerId,
  };

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
          dispatch(getCategories(e.target.value));
        },
        options: directionsDict,
      },
      {
        name: "category",
        label: "Категория",
        type: "select",
        options: categoriesDict,
      },
      {
        name: "businessHours",
        yup: [{ key: "optional", args: [] }],
        label: (
          <span>
            Расписание<Subtitle>пн - пт</Subtitle>
          </span>
        ),
        type: "select",
        options: getSchedule(),
      },
      {
        name: "ageFrom",
        label: (
          <span>
            Возраст<Subtitle>от</Subtitle>
          </span>
        ),
        type: "select",
        col: 3,
        options: getAge(25),
      },
      {
        name: "ageTo",
        label: (
          <span>
            <Space />
            <Subtitle>до</Subtitle>
          </span>
        ),
        type: "select",
        col: 3,
        options: getAge(25),
      },
    ],
  };

  return (
    <>
      {!loading ? (
        <>
          <FormGenerator
            config={config}
            onSubmit={(values) => {
              setGeneral(values);
            }}
            initialValues={{ ...generalData }}
            setRef={setRef}
          />
          <Partners>
            <FormSectionTitle offsetLeft={40} marginBottom={20}>
              Партнеры
            </FormSectionTitle>
            <PartnersField>
              <Formik onSubmit={() => {}} initialValues={{}}>
                <Form>
                  <Select
                    title={"Выбрать..."}
                    onChange={() => {}}
                    options={partners}
                    name="partnerId"
                    side={(e) => choosePartner(e.target.value)}
                    value={generalData?.partnerId}
                  />
                </Form>
              </Formik>
            </PartnersField>
          </Partners>
        </>
      ) : (
        "Загрузка..."
      )}
    </>
  );
}
export default GeneralForm;
