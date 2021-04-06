import React from "react";
import { Wrapper } from "./styled";
import Table from "parts/Table";
import { Status } from "parts/Table/styled";
import AddButton from "parts/AddButton";

function Events() {
  return (
    <Wrapper>
      <AddButton to="events/add" />
      <Table
        fields={[
          {
            label: "ID",
            key: "id",
            props: { textalign: "center", width: "7%" },
          },
          {
            label: "Название",
            key: "name",
            props: { width: "20%" },
          },
          {
            label: "Тип события",
            key: "type",
          },
          {
            label: "Категория",
            key: "category",
          },
          {
            label: "Организация",
            key: "org",
          },
          {
            label: "Партнер",
            key: "partner",
          },
          {
            label: "Дата",
            key: "date",
          },
          {
            label: "Статус",
            key: "status",
            getComponent: (value) => <Status>{value}</Status>,
          },
        ]}
        items={[
          {
            id: "1",
            name: "Видеоролик",
            type: "Кастинги",
            category: "Съемки",
            org: "Ромашка и ко",
            partner: "Центр Никиты Лобанова",
            date: "23.01.20",
            status: "Заблокирован",
          },
        ]}
      ></Table>
    </Wrapper>
  );
}
export default Events;
