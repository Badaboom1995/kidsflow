import React from "react";
import FormGenerator from "parts/FormGenerator";
import { setStateFunc } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "features/OrganizationForm/duck/selectors";
import { addData } from "features/OrganizationForm/duck/slice";

interface IContactsForm {
  setFormRef: setStateFunc;
}
function ContactsForm({ setFormRef }: IContactsForm) {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  return (
    <>
      <FormGenerator
        config={{
          title: "Контакты",
          settings: { defaultType: "text", defaultCol: 6 },
          fields: [
            { name: "address", label: "Адрес" },
            { name: "phoneNumber", label: "Телефон" },
            { name: "email", label: "Email" },
            { name: "site", label: "Сайт" },
          ],
        }}
        onSubmit={(values) => {
          dispatch(addData({ key: "contacts", values }));
        }}
        setRef={(ref) => setFormRef(ref)}
        initialValues={data.contacts}
      />
    </>
  );
}
export default ContactsForm;
