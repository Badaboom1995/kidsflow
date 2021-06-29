import React from "react";
import FormGenerator from "parts/FormGenerator";
import { getAge } from "config/constants";
import { useDispatch, useSelector } from "react-redux";

import {
  currentOrganizationSelector,
  directionSelector,
  categorySelector,
  partnerSelector,
  currentDirectionSelector,
} from "../../duck/selectors";
import { Subtitle, Space } from "./styled";
import { getCategories } from "features/AddOrg/duck/actions";

function GeneralForm({ setGeneral, setRef, setFormState }) {
  const dispatch = useDispatch();
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
      directions?.find((item) => !item.parentId)?.eventDirectionId,
    category: directions?.find((item) => item.parentId)?.eventDirectionId,
    businessHours: "",
    ageFrom: ageFrom?.toString(),
    ageTo: ageTo?.toString(),
    partnerId: partner?.partnerId,
  };

  const config: any = {
    title: "Общее",
    settings: { defaultType: "text", defaultCol: 6 },
    fields: [
      {
        name: "name",
        label: (
          <span>
            Название<Subtitle>максимум 30 символов</Subtitle>
          </span>
        ),
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
      {
        name: "directions",
        label: (
          <span>
            Направление
            <Subtitle>Можно выбрать только одно направление</Subtitle>
          </span>
        ),
        type: "select",
        side: (e) => {
          dispatch(getCategories(e.target.value));
        },
        options: directionsDict || [],
      },
      {
        name: "category",
        label: (
          <span>
            Категория
            <Subtitle>И одну категорию</Subtitle>
          </span>
        ),
        type: "select",
        options: categoriesDict || [],
      },
      {
        name: "about",
        label: (
          <span>
            Описание
            <Subtitle>Максимум 400 символов</Subtitle>
          </span>
        ),
        type: "textarea",
      },
      {
        name: "partnerId",
        label: (
          <span>
            Партнер
            <Space></Space>
          </span>
        ),
        type: "select",
        options: partners || [],
      },
      // {
      //   name: "businessHours",
      //   yup: [{ key: "optional", args: [] }],
      //   label: (
      //     <div>
      //       Расписание<Subtitle>пн - пт</Subtitle>
      //     </div>
      //   ),
      //   type: "select",
      //   options: getSchedule(),
      // },
    ],
  };

  return (
    <>
      <FormGenerator
        config={config}
        onSubmit={(values) => {
          setGeneral(values);
        }}
        initialValues={generalData}
        setRef={setRef}
        setFormState={setFormState}
      />
    </>
  );
}
export default GeneralForm;
