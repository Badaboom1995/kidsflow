import React, { useEffect, useState } from "react";
import FormGenerator from "parts/FormGenerator";
import { getAge } from "config/constants";
import organizationsService from "services/organizations";
import directionsService from "services/directions";
import { useDispatch, useSelector } from "react-redux";
import { chooseDirection } from "../../duck/slice";
import { directionSelector } from "../../duck/selectors";
import { Subtitle, Space } from "./styled";

function GeneralForm({ initialData, setGeneral, setRef }) {
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
      {
        name: "name",
        label: (
          <div>
            Название <Subtitle>Максимум 30 символов</Subtitle>
          </div>
        ),
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
      {
        name: "directions",
        label: (
          <div>
            Направление
            <Subtitle>Можно выбрать только одно направление</Subtitle>
          </div>
        ),
        type: "select",
        side: (e) => {
          dispatch(chooseDirection(e.target.value));
        },
        options: kinds || [],
      },
      {
        name: "category",
        label: (
          <div>
            Категория
            <Subtitle>И одну категорию</Subtitle>
          </div>
        ),
        type: "select",
        options: category || [],
      },
      {
        name: "about",
        label: (
          <div>
            Описание
            <Subtitle>Максимум 400 символов</Subtitle>
          </div>
        ),
        type: "textarea",
      },
      {
        name: "partnerId",
        label: (
          <div>
            Партнер
            <Space></Space>
          </div>
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
        initialValues={initialData}
        setRef={setRef}
      />
    </>
  );
}
export default GeneralForm;
