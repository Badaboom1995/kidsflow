import React, { useState } from "react";
import FormGenerator from "parts/FormGenerator";
import { setStateFunc } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import {
  dataSelector,
  stationsSelector,
} from "features/OrganizationForm/duck/selectors";
import { addData } from "features/OrganizationForm/duck/slice";
import Search from "parts/Search";

interface IContactsForm {
  setFormRef: setStateFunc;
}
function ContactsForm({ setFormRef }: IContactsForm) {
  const data = useSelector(dataSelector);
  const stationsDict = useSelector(stationsSelector);
  const [prompts, setPrompt] = useState<string[]>([]);
  const dispatch = useDispatch();
  return (
    <>
      <FormGenerator
        config={{
          title: "Контакты",
          settings: { defaultType: "text", defaultCol: 6 },
          fields: [
            {
              name: "address",
              label: "Адрес",
              // type: "search",
              // prompts: prompts,
              // onChange: (value) => {
              //   setPrompt([...prompts, value]);
              // },
            },
            { name: "phoneNumber", label: "Телефон" },
            { name: "email", label: "Email" },
            { name: "site", label: "Сайт" },
            {
              name: "city",
              label: "Город",
              type: "select",
              options: [],
            },
            {
              name: "metroStation",
              label: "Метро",
              type: "select",
              options: stationsDict || [],
            },
            { name: "businessHours", label: "Часы работы" },
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
