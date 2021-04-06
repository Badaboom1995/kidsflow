import Table from "parts/Table";
import React, { useState } from "react";
import { Wrapper, ModalHeader } from "./styled";
import Modal from "parts/Modal";
import Button from "parts/Button";
import ModalCard from "parts/ModalCard";
import { BackButton, FormSectionTitle, Status } from "parts/styled";
import Reviews from "./components/Review";
import blackPlus from "assets/blackPlus.svg";

function SupportView() {
  const [isVisible, changeVisibility] = useState(false);
  return (
    <Wrapper>
      <Modal isVisible={isVisible} changeVisibility={changeVisibility}>
        <ModalCard>
          <ModalHeader>
            <BackButton
              onClick={() => {
                changeVisibility(false);
              }}
            >
              Назад
            </BackButton>
            <FormSectionTitle>Обращение № 23</FormSectionTitle>
            <Status>Не решен</Status>
          </ModalHeader>
          <Reviews />
        </ModalCard>
      </Modal>
      <div style={{ padding: "15px", paddingTop: 0 }}>
        <Button
          onClick={() => {
            changeVisibility(!isVisible);
          }}
          icon={blackPlus}
        >
          Добавить
        </Button>
      </div>

      <Table
        fields={[
          {
            label: "ID",
            key: "id",
            props: { textalign: "center", width: "7%" },
          },
          {
            label: "Партнер",
            key: "partner",
            props: { width: "17%" },
            getComponent: (text) => <div>{text}</div>,
          },
          { label: "Дата", key: "date", props: { width: "10%" } },
          {
            label: "Телефон",
            key: "phone",
            props: { width: "13%" },
            getComponent: (adress) => <div>{adress}</div>,
          },
          { label: "E-mail", key: "email", props: { width: "15%" } },
          {
            label: "Текст",
            key: "text",
            props: { width: "25%" },
          },
          {
            label: "Статус",
            key: "status",
            getComponent: () => <Status>Не решен</Status>,
          },
        ]}
        items={[
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "+7 (927) 121 12 43",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
          {
            id: "1",
            partner: "Продюсерский центр Максима Фадеева",
            date: "10.03.2020",
            phone: "ПартнеркА",
            email: "Новолесная ул. дом 3",
            text: "Кастинги",
            status: "sas",
          },
        ]}
      ></Table>
    </Wrapper>
  );
}
export default SupportView;
