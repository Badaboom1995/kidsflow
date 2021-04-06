import Table from "parts/Table";
import React from "react";
import { Wrapper, OrgName, Adress } from "./styled";
import { Status } from "parts/styled";

import AddButton from "parts/AddButton";

function Orgs() {
  return (
    <Wrapper>
      <AddButton to="orgs/add-org" />
      <Table
        fields={[
          {
            label: "ID",
            key: "id",
            props: { textalign: "center", width: "7%" },
          },
          {
            label: "Центр",
            key: "center",
            props: { width: "20%" },
            getComponent: (text) => <OrgName>{text}</OrgName>,
          },
          { label: "Категория", key: "category" },
          { label: "Партнер", key: "partner", props: { width: "13%" } },
          {
            label: "Адрес",
            key: "adress",
            props: { width: "13%" },
            getComponent: (adress) => <Adress>{adress}</Adress>,
          },
          { label: "Тип организации", key: "orgType", props: { width: "15%" } },
          {
            label: "Статус",
            key: "status",
            getComponent: () => <Status>Заблокирован</Status>,
          },
        ]}
        items={[
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Comedy FG",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Менеджмент Артиста 360°",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            center: "Продюсерский центр Максима Фадеева",
            category: "7 915 420 55 84",
            partner: "ПартнеркА",
            adress: "Новолесная ул. дом 3",
            orgType: "Кастинги",
            status: "sas",
          },
        ]}
      ></Table>
    </Wrapper>
  );
}
export default Orgs;
