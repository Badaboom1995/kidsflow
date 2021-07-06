import React, { useState } from "react";
import { Wrapper, Left, Right, Row } from "./styled";
import FormGenerator from "parts/FormGenerator";
import UpoadFile from "parts/UpoadFileOld";
import { ButtonsArea, FormSectionTitle } from "parts/styled";
import BackSection from "parts/BackSection";
import Button from "parts/Button";

function CatalogAdd() {
  const [formRef, setRef] = useState(null);
  return (
    <div>
      <BackSection />
      <Wrapper transparent>
        <Left>
          <FormGenerator
            transparent
            config={{
              settings: { defaultCol: 12, defaultType: "text" },
              fields: [
                { name: "name", label: "Название" },
                { name: "planetName", label: "Название планеты" },
                { name: "categoryName", label: "Название категории" },
                {
                  name: "category",
                  label: "Категории",
                  type: "select",
                  options: [{ name: "option one", value: "Value" }],
                },
              ],
            }}
            setRef={setRef}
          />
        </Left>
        <Right>
          <Row>
            <FormSectionTitle>Иконка направления:</FormSectionTitle>
            <UpoadFile label="Добавить" />
          </Row>
          <Row>
            <FormSectionTitle>Иконка планеты:</FormSectionTitle>
            <UpoadFile label="Добавить" />
          </Row>
          <Row>
            <FormSectionTitle>Изображение категории:</FormSectionTitle>
            <UpoadFile label="Добавить" />
            <UpoadFile label="Добавить" />
          </Row>
        </Right>
      </Wrapper>
      <ButtonsArea>
        <Button onClick={formRef?.current.handleSubmit}>Сохранить</Button>
      </ButtonsArea>
    </div>
  );
}
export default CatalogAdd;
