import React, {useEffect, useState} from 'react';
import Input from 'parts/FormikFields/TextInput';
import Select from 'parts/Select';
import {
  FormContent,
  GridContainer,
  GridElement,
  Subtitle,
} from 'parts/styled';
import { getAge } from 'config/constants';
import SelectNew from "parts/SelectNew";
import {useSelector} from "react-redux";
import {selectCategories, selectDirections, selectCategoriesHigh, selectPartners} from "ducks/dicts/selectors";
import {useFormikContext} from "formik";
import UploadSection from 'parts/UploadSection';
import organizationsService from "services/organizations";

const age: { name: string; value: string }[] = getAge(25);
const GeneralForm = () => {
  const directions = useSelector(selectDirections)
  const categories = useSelector(selectCategories)
  const subcategories = useSelector(selectCategoriesHigh)
  const partners = useSelector(selectPartners)
  const [filteredCategories, setCat] = useState(null)
  const [filteredSubCategories, setSubCat] = useState(null)
  const { values }: any = useFormikContext();


  const filterByParent = (source, filter) => {
    const result = source.filter(curr => curr.parentId === filter)
    return  result.length ? result : null
  }

  return (
    <FormContent>
      <GridContainer>
        <GridElement col={6}>
          <Input
            name="name"
            label={
              <span>
                Название<Subtitle>максимум 30 символов</Subtitle>
              </span>
            }
          />
        </GridElement>
        <GridElement col={3}>
          <Select
            label="Возраст"
            description="от"
            title="---"
            name="ageFrom"
            options={age}
            onChange={() => {}}
          />
        </GridElement>
        <GridElement col={3}>
          <Select
            description="до"
            title="---"
            name="ageTo"
            options={age}
            onChange={() => {}}
          />
        </GridElement>
        <GridElement>
          <Select
            label="Партнер"
            description="выберите одного из списка"
            title="---"
            name="partnerId"
            options={partners}
            onChange={() => {}}
          />
        </GridElement>
        <GridElement>
          <Select
            label="Направление"
            description="Можно выбрать только одно направление"
            title="---"
            name="direction"
            options={directions}
            onChange={(e) => {
              setCat(filterByParent(categories, e.target.value))
            }}
          />
        </GridElement>
        <GridElement>
          <SelectNew
            label="Категория"
            emptyDictTitle='Нет направления'
            title="---"
            name="category"
            options={filteredCategories}
            onChange={(e) => {
              setSubCat(filterByParent(subcategories, e.target.value))
            }}
          />
        </GridElement>
        <GridElement>
          <SelectNew
            label="Подкатегория"
            emptyDictTitle='Нет категории'
            title="---"
            name="categoryHigh"
            options={filteredSubCategories}
            onChange={() => {}}
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
      <GridElement col={12}>
        {console.log(values.photos)}
        <UploadSection
            loadedImages={values.photos}
            onUpload={organizationsService.uploadImage}
            onExtraUpload={organizationsService.uploadExtraImage}
            onDelete={organizationsService.deleteImage}
            onExtraDelete={organizationsService.deleteExtraImage}
        />
      </GridElement>
    </FormContent>
  );
};
export default GeneralForm;
