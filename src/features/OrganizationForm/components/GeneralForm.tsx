import React from "react";
import FormGenerator from "parts/FormGenerator";
import { Subtitle, Space } from "parts/styled";
import { getAge } from "config/constants";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "../styled";
import {
  currentOrganizationSelector,
  directionSelector,
  categorySelector,
  partnerSelector,
  currentDirectionSelector,
  imagesSelector,
} from "../duck/selectors";

import { getCategories } from "features/OrganizationForm/duck/actions";
import {
  deleteImage,
  uploadExtraImage,
  uploadImage,
} from "features/OrganizationForm/duck/actions";
import { addData, removeUploadId } from "features/OrganizationForm/duck/slice";
import MultyUploader from "parts/MultyUploader";

import { configType } from "../types";

function GeneralForm({ setRef }) {
  const dispatch = useDispatch();
  const directionsDict = useSelector(directionSelector);
  const categoriesDict = useSelector(categorySelector);
  const partners = useSelector(partnerSelector);
  const currentOrganization = useSelector(currentOrganizationSelector);
  const currentDirection = useSelector(currentDirectionSelector);

  const addItems = useSelector(imagesSelector);
  const updateItems = currentOrganization?.photos.map((item) => ({
    id: item.id,
    url: item.cloudUrl,
  }));

  const { about, name, ageFrom, ageTo, partner, directions } =
    currentOrganization || {};

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

  const onUpload = (file) => {
    dispatch(uploadImage(file));
  };
  const onExtraUpload = (file) => {
    dispatch(uploadExtraImage({ file, orgId: currentOrganization.id }));
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
        initialValues={generalData}
        setRef={setRef}
      />
      <Row>
        {currentOrganization ? (
          <>
            <MultyUploader
              onAdd={onExtraUpload}
              onRemove={(id) => {
                dispatch(
                  deleteImage({
                    orgId: currentOrganization.id,
                    uploadId: id,
                  })
                );
              }}
              addLabel="Добавить фото"
              items={updateItems}
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
              items={addItems}
            />
          </>
        )}
      </Row>
    </>
  );
}
export default GeneralForm;
