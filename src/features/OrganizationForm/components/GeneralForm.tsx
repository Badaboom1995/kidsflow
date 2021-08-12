import React from "react";
import FormGenerator from "parts/FormGenerator";
import { Subtitle, Space } from "parts/styled";
import { getAge } from "config/constants";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "../styled";
import {
  directionSelector,
  categorySelector,
  partnerSelector,
  imagesSelector,
  dataSelector,
} from "../duck/selectors";

import { getCategories } from "features/OrganizationForm/duck/actions";
import {
  deleteImage,
  uploadExtraImage,
  uploadImage,
} from "features/OrganizationForm/duck/actions";
import {
  addData,
  removeUploadId,
  setSchedule,
} from "features/OrganizationForm/duck/slice";
import MultyUploader from "parts/MultyUploader";

import { configType } from "../types";
import { useParams } from "react-router-dom";

function GeneralForm({ setRef }) {
  const dispatch = useDispatch();
  const directionsDict = useSelector(directionSelector);
  const data = useSelector(dataSelector);
  const categoriesDict = useSelector(categorySelector);
  const partners = useSelector(partnerSelector);
  const { id }: { id: string } = useParams();
  const images = useSelector(imagesSelector);

  const onUpload = (file) => {
    dispatch(uploadImage(file));
  };
  const onExtraUpload = (file) => {
    dispatch(uploadExtraImage({ file, orgId: id }));
  };

  const fields = [
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
      name: "partnerId",
      label: (
        <span>
          Партнер
          <Subtitle>выберите одного из списка</Subtitle>
        </span>
      ),
      type: "select",
      options: partners || [],
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
      name: "category",
      label: (
        <span>
          Категория
          <Subtitle>Можно выбрать несколько категорий</Subtitle>
        </span>
      ),
      type: "chips",
      options: categoriesDict || [],
    },
  ];

  const config: configType = {
    title: "Общее",
    settings: { defaultType: "text", defaultCol: 6 },
    fields,
  };

  return (
    <>
      <FormGenerator
        config={config}
        onSubmit={(values) => {
          dispatch(addData({ key: "general", values }));
        }}
        initialValues={data.general}
        setRef={setRef}
      />
      <Row>
        {id ? (
          <>
            <MultyUploader
              onAdd={onExtraUpload}
              onRemove={(uploadId) => {
                dispatch(
                  deleteImage({
                    orgId: id,
                    uploadId,
                  })
                );
              }}
              addLabel="Добавить фото"
              items={images}
            />
          </>
        ) : (
          <>
            <MultyUploader
              onAdd={onUpload}
              onRemove={(id) => {
                dispatch(removeUploadId(id));
              }}
              addLabel="Добавить фото"
              items={images}
            />
          </>
        )}
      </Row>
    </>
  );
}
export default GeneralForm;
