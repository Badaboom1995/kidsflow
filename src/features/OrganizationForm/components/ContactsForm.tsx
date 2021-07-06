import React from "react";
import FormGenerator from "parts/FormGenerator";
import { setStateFunc } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import { currentOrganizationSelector } from "features/OrganizationForm/duck/selectors";
import { addData } from "features/OrganizationForm/duck/slice";

interface IContactsForm {
  setFormRef: setStateFunc;
}
function ContactsForm({ setFormRef }: IContactsForm) {
  const rawData = useSelector(currentOrganizationSelector);
  const dispatch = useDispatch();
  const { address, phoneNumber, email, site } = rawData || {};
  const contactsData = { address, phoneNumber, email, site };
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
        initialValues={contactsData}
      />
    </>
  );
}
export default ContactsForm;
