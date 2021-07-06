import React from "react";
import { GridContainer } from "parts/styled";
import { Form } from "formik";
import { FormSectionTitle } from "parts/styled";
import { Wrapper } from "./styled";
import { TabsType } from "./types";
import Tabs from "parts/Tabs";

interface IAddUserFormView {
  title: string;
  tabs?: TabsType;
  fields: React.ReactElement[];
  handleSubmit: any;
  transparent: boolean;
}
function ChildFormView({
  fields,
  tabs,
  handleSubmit,
  title,
  transparent,
}: IAddUserFormView) {
  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <GridContainer transparent={transparent}>
          {title && (
            <FormSectionTitle offsetLeft={50} marginBottom={20}>
              {title}
            </FormSectionTitle>
          )}
          {tabs ? (
            <Tabs
              activeId={0}
              tabs={tabs.map((item, index) => ({
                id: index,
                name: item.name,
                content: item.fields.map((fieldName) =>
                  fields.find((fieldElem) => fieldName === fieldElem.key)
                ),
              }))}
            />
          ) : (
            fields
          )}
        </GridContainer>
      </Wrapper>
    </Form>
  );
}
export default ChildFormView;
