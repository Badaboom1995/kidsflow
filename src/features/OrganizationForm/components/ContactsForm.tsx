import React, { useState, useEffect } from "react";
import FormGenerator from "parts/FormGenerator";
import { setStateFunc } from "common/types";
import { useDispatch, useSelector } from "react-redux";
import {
  dataSelector,
  isOnlineSchool,
  promptsSelector,
  scheduleSelector,
  stationsSelector,
} from "features/OrganizationForm/duck/selectors";
import { addData, setSchedule } from "features/OrganizationForm/duck/slice";
import { getAddressSuggest } from "../duck/actions";
import Choose from "parts/Choose";
import { SchoolTypeHandler } from "../styled";

import { switchOnline } from "../duck/slice";

interface IContactsForm {
  setFormRef: setStateFunc;
}

function ContactsForm({ setFormRef }: IContactsForm) {
  const isOnline = useSelector(isOnlineSchool);
  const [online, setOnline] = useState(isOnline);
  const data = useSelector(dataSelector);
  const stationsDict = useSelector(stationsSelector);
  const prompts = useSelector(promptsSelector);
  const businessHours = useSelector(scheduleSelector);
  const dispatch = useDispatch();

  const onScheduleChange = (schedule) => {
    dispatch(setSchedule(schedule));
  };
  const defaultFields = [
    { name: "phoneNumber", label: "Телефон" },
    { name: "email", label: "Email" },
    { name: "site", label: "Сайт" },
    {
      name: "businessHours",
      label: "Часы работы",
      type: "timeSchedule",
      onChange: onScheduleChange,
    },
    {
      name: "metroStation",
      label: "Метро",
      type: "select",
      options: stationsDict || [],
    },
  ];

  const [fields, setFields] = useState<any[]>(defaultFields);

  useEffect(() => {
    if (online) {
      setFields([
        {
          name: "referralLink",
          label: "Реферальная ссылка",
        },
        ...defaultFields,
      ]);
      return;
    }
    setFields([
      {
        name: "address",
        label: "Адрес",
        type: "search",
        prompts: prompts,
        onChange: (value) => {
          dispatch(getAddressSuggest(value));
        },
      },
      ...defaultFields,
    ]);
  }, [online, prompts]);

  return (
    <>
      <SchoolTypeHandler>
        <Choose
          onChange={(status) => {
            dispatch(switchOnline());
            setOnline(status === "online" ? true : false);
          }}
          options={[
            { name: "Оффлайн", status: "offline" },
            { name: "Онлайн", status: "online" },
          ]}
          current={isOnline ? "Онлайн" : "Оффлайн"}
        />
      </SchoolTypeHandler>

      <FormGenerator
        config={{
          title: "Контакты",
          settings: { defaultType: "text", defaultCol: 6 },
          fields,
        }}
        onSubmit={(values) => {
          dispatch(addData({ key: "contacts", values }));
        }}
        setRef={(ref) => setFormRef(ref)}
        initialValues={{ ...data.contacts, businessHours }}
      />
    </>
  );
}
export default ContactsForm;
