import React from "react";
import FormGenerator from "parts/FormGenerator";
import { setStateFunc } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import {
  dataSelector,
  promptsSelector,
  stationsSelector,
} from "features/OrganizationForm/duck/selectors";
import { addData } from "features/OrganizationForm/duck/slice";
import { getAddressSuggest } from "../duck/actions";
interface IContactsForm {
  setFormRef: setStateFunc;
}
function ContactsForm({ setFormRef }: IContactsForm) {
  const data = useSelector(dataSelector);
  const stationsDict = useSelector(stationsSelector);
  const prompts = useSelector(promptsSelector);
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
              type: "search",
              prompts: prompts,
              onChange: (value) => {
                dispatch(getAddressSuggest(value));
              },
            },
            { name: "phoneNumber", label: "Телефон" },
            { name: "email", label: "Email" },
            { name: "site", label: "Сайт" },
            {
              name: "referralLink",
              label: "Реферальная ссылка",
            },
            {
              name: "metroStation",
              label: "Метро",
              type: "select",
              options: stationsDict || [],
            },
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
