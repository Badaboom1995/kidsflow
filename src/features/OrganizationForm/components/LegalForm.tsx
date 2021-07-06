import React from "react";
import FormGenerator from "parts/FormGenerator";
import { setStateFunc } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import { currentOrganizationSelector } from "features/OrganizationForm/duck/selectors";
import { Row, Docs } from "../styled";
import { FormSectionTitle } from "parts/styled";
import UpoadFile from "parts/UpoadFileOld";
import { addData } from "features/OrganizationForm/duck/slice";

interface ILegalForm {
  setFormRef: setStateFunc;
}
function LegalForm({ setFormRef }: ILegalForm) {
  const rawData = useSelector(currentOrganizationSelector);
  const dispatch = useDispatch();
  const {
    entity,
    accountNumber,
    taxIdNumber,
    primaryStateNumber,
    legalAddress,
  } = rawData || {};

  const legalData = {
    entity,
    accountNumber,
    taxIdNumber,
    primaryStateNumber,
    legalAddress,
  };
  return (
    <>
      <FormGenerator
        config={{
          title: "Юридические данные",
          settings: { defaultType: "text", defaultCol: 6 },
          fields: [
            { name: "entity", label: "Юр.Лицо" },
            { name: "accountNumber", label: "Расчетный счет" },
            { name: "taxIdNumber", label: "ИНН" },
            { name: "primaryStateNumber", label: "ОГРН" },
            { name: "legalAddress", label: "Юр. адрес" },
          ],
        }}
        onSubmit={(values) => {
          dispatch(addData({ key: "legal", values }));
        }}
        setRef={(ref) => setFormRef(ref)}
        initialValues={legalData}
      />
      <Row>
        <FormSectionTitle>Документы:</FormSectionTitle>
        <Docs>
          <UpoadFile label="Добавить документ" file />
          <UpoadFile label="Добавить документ" file />
          <UpoadFile label="Добавить документ" file />
        </Docs>
      </Row>
    </>
  );
}
export default LegalForm;
