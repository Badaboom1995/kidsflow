import React, { useState } from "react";
import Input from "parts/Input";
import Select from "parts/Select";
import Search from "parts/Search";
import { GridContainer, GridElement, Subtitle } from "parts/styled";
import { getAge } from "config/constants";
import { useSelector } from "react-redux";
import {
  selectDirections,
  selectCategories,
  selectPartners,
} from "ducks/dicts/selectors";
import UploadSection from "parts/UploadSection";
import uploadsService from "services/uploads";

interface IGeneralForm {
  prompts: string[];
  handleChange: (e: any) => void;
  getSearchPrompts: (p: string) => void;
}

function GeneralForm({
  prompts,
  handleChange,
  getSearchPrompts,
}: IGeneralForm) {
  const directions = useSelector(selectDirections);
  const categories = useSelector(selectCategories);
  const partners = useSelector(selectPartners);

  const [currentDirectionId, setCurrentDirection] = useState<string>(null);

  const age = getAge(20);

  const getFilteredCategories = () =>
    categories.filter((item) => item.parentId === currentDirectionId);

  return (
    <div>
      <GridContainer>
        <GridElement>
          <Input name="name" label="Название" />
        </GridElement>
        <GridElement col={3}>
          <Select
            label="Направление"
            title={directions ? "---" : "Загружаем направления..."}
            name="categoryId"
            options={directions}
            onChange={(e) => {
              setCurrentDirection(e.target.value);
              handleChange(e);
            }}
          />
        </GridElement>
        <GridElement col={3}>
          <Select
            label="Категория"
            title={getFilteredCategories().length ? "---" : "⬅️"}
            name="eventDirectionId"
            options={getFilteredCategories()}
            onChange={handleChange}
          />
        </GridElement>
        <GridElement>
          <Search
            label="Организация"
            name="organization"
            prompts={prompts}
            onChange={(value) => {
              getSearchPrompts(value);
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
          <GridElement col={4}>
            <Select
              label={
                <span>
                  Места<Subtitle>max</Subtitle>
                </span>
              }
              title="---"
              name="numberOfSpots"
              options={getAge(100)}
              onChange={handleChange}
            />
          </GridElement>
          <GridElement>
            <Select
              label="Дата"
              title="---"
              name="eventDate"
              options={[
                { name: "name", value: "value" },
                { name: "name1", value: "value1" },
              ]}
              onChange={handleChange}
            />
          </GridElement>
          <GridElement>
            <Select
              label="Время "
              title="---"
              name="date"
              options={[
                { name: "name", value: "value" },
                { name: "name1", value: "value1" },
              ]}
              onChange={handleChange}
            />
          </GridElement>
        </GridContainer>
        <GridElement>
          <Input
            name="description"
            label={
              <span>
                Описание<Subtitle>Расскажите подробнее о событии</Subtitle>
              </span>
            }
            type="textarea"
          />
        </GridElement>
      </GridContainer>
      <UploadSection
        onUpload={uploadsService.uploadImage}
        onDelete={uploadsService.deleteImage}
      />
    </div>
  );
}

export default GeneralForm;
