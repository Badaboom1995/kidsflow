import React, { useState } from "react";

import Input from "parts/Input";
import Select from "parts/Select";
import Search from "parts/Search";
import { GridContainer, GridElement, Subtitle } from "parts/styled";
import { gender, getAge } from "config/constants";
import { useSelector, useDispatch } from "react-redux";

import {
  selectDirections,
  selectCategories,
  selectPartners,
} from "ducks/dicts/selectors";

import { getOrganizationsPrompt } from "../../duck/actions";
import { clearEventData, clearOrgPrompts } from "features/EventsAdd/duck/slice";

import UploadSection from "parts/UploadSection";
import uploadsService from "services/uploads";
import CategoryChips from "parts/CategoryChips";

import "react-datepicker/dist/react-datepicker.css";
import DateInput from "parts/DateInput";
import TimeInput from "parts/TimeInput";
import { useFormikContext } from "formik";
import { selectExtraData } from "features/EventsAdd/duck/selectors";

interface IGeneralForm {
  prompts: { name: string; value: string }[];
  handleChange: (e: any) => void;
}

function GeneralForm({ prompts, handleChange }: IGeneralForm) {
  const dispatch = useDispatch();

  const directions = useSelector(selectDirections);
  const categories = useSelector(selectCategories);
  const partners = useSelector(selectPartners);
  const extraData = useSelector(selectExtraData);

  const getPrompts = (name) => {
    dispatch(getOrganizationsPrompt(name));
  };
  const clearPrompts = () => {
    dispatch(clearOrgPrompts());
  };

  const [currentDirectionId, setCurrentDirection] = useState<string>(null);

  const { values } = useFormikContext<any>();
  const age = getAge(100);

  const getFilteredCategories = () => {
    const categoriesByDirerction = categories.filter(
      (item) => item.parentId === currentDirectionId
    );
    return categoriesByDirerction.length ? categoriesByDirerction : categories;
  };

  return (
    <div>
      <GridContainer>
        <GridElement>
          <Input name="name" label="Название" />
        </GridElement>
        <GridElement col={2}>
          <TimeInput name="time" label="Время" />
        </GridElement>
        <GridElement col={2}>
          <DateInput name="eventDate" label="Дата" />
        </GridElement>
        <GridElement col={2}>
          <Input name="numberOfSpots" label="Места" />
        </GridElement>
        <GridElement>
          <Search
            label="Организация"
            value={extraData.organizationName}
            name="organizationId"
            prompts={prompts}
            onChange={(value) => {
              getPrompts(value);
            }}
            onChoose={() => {
              clearPrompts();
            }}
          />
        </GridElement>
        <GridElement>
          <Select
            label="Партнер"
            title="---"
            name="partner"
            options={partners}
            onChange={handleChange}
          />
        </GridElement>
        <GridContainer>
          <GridElement col={4}>
            <Select
              label={
                <span>
                  Пол<Subtitle>бинарный</Subtitle>
                </span>
              }
              title="---"
              name="gender"
              options={gender}
              onChange={handleChange}
            />
          </GridElement>
          <GridElement col={4}>
            <Select
              label={
                <span>
                  Возраст<Subtitle>от</Subtitle>
                </span>
              }
              title="---"
              name="ageFrom"
              options={age}
              onChange={handleChange}
            />
          </GridElement>
          <GridElement col={4}>
            <Select
              label={
                <span>
                  Возраст<Subtitle>до</Subtitle>
                </span>
              }
              title="---"
              name="ageTo"
              options={age}
              onChange={handleChange}
            />
          </GridElement>
          <GridElement col={12}>
            <Input
              name="about"
              label={
                <span>
                  Описание<Subtitle>Расскажите подробнее о событии</Subtitle>
                </span>
              }
              type="textarea"
            />
          </GridElement>
        </GridContainer>
        <GridContainer>
          <GridElement col={12}>
            <Select
              label={
                <span>
                  Направление<Subtitle>Выберите одно</Subtitle>
                </span>
              }
              title={directions ? "---" : "Загружаем направления..."}
              name="categoryId"
              options={directions}
              onChange={(e) => {
                setCurrentDirection(e.target.value);
                handleChange(e);
              }}
            />
          </GridElement>
          <GridElement col={12}>
            <CategoryChips
              title={
                <span>
                  Категория<Subtitle>можно выбрать несколько</Subtitle>
                </span>
              }
              name="eventDirectionId"
              list={getFilteredCategories()}
              value={values?.eventDirectionId}
            />
          </GridElement>
        </GridContainer>
      </GridContainer>
      <UploadSection
        onUpload={uploadsService.uploadImage}
        onDelete={uploadsService.deleteImage}
      />
    </div>
  );
}

export default GeneralForm;
