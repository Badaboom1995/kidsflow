import React from "react";
import { Wrapper } from "./styled";
import Table from "parts/Table";
import { Tariff, Status } from "parts/styled";

function User() {
  return (
    <Wrapper>
      <Table
        fields={[
          {
            label: "ID",
            key: "id",
            props: { textalign: "center", width: "7%" },
          },
          {
            label: "ФИО",
            key: "fullName",
            props: { width: "280px" },
          },
          { label: "Телефон", key: "phone", props: { width: "15%" } },
          { label: "E-mail", key: "email", props: { width: "20%" } },
          {
            label: "Подписка",
            key: "subscriptionType",
            getComponent: (status: string) => <Tariff>{status}</Tariff>,
            props: { width: "12%" },
          },
          {
            label: "Статус",
            key: "status",
            getComponent: (status: string) => <Status>{status}</Status>,
          },
        ]}
        items={[
          {
            id: 1,
            fullName: "Петров Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 2,
            fullName: "Чернов Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 3,
            fullName: "Иванов Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 4,
            fullName: "Косов Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 5,
            fullName: "Варунгов Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 6,
            fullName: "Каков Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 7,
            fullName: "Таков Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 8,
            fullName: "Таких Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 9,
            fullName: "Тигр Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 10,
            fullName: "Волк Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
          {
            id: 11,
            fullName: "Пес Константин Павлович",
            phone: "7 915 444 55 84",
            email: "ivan@mail.ru",
            subscriptionType: "pro",
            status: "Заблокирован",
          },
        ]}
      />
    </Wrapper>
  );
}
export default User;
