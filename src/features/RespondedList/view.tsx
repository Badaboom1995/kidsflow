import React from "react";
import Modal from "parts/Modal";
import ModalCard from "parts/ModalCard";
import { BackButton } from "parts/styled";
import { IRespondedList } from "./index";
import { Title, List, ListItem } from "./styled";

function RespondedListView(props: IRespondedList) {
  const fakeData = [
    "Иванова Агафья",
    "Шуткин Алексей",
    "Наталья Щедрина",
    "Анастасия Курпатенкова",
    "Денис Пирожков",
    "Иван Алексеев",
    "Маргарита Иларионова",
    "Заболоцкий Андрей",
    "Сухоруков Виктор",
    "Кириянов Станислав",
    "Заболоцкий Андрей",
    "Сухоруков Виктор",
    "Кириянов Станислав",
    "Заболоцкий Андрей",
    "Сухоруков Виктор",
    "Кириянов Станислав",
  ];
  return (
    <Modal {...props}>
      <ModalCard>
        <BackButton>Назад</BackButton>
        <Title>откликнувшиеся</Title>
        <List>
          {fakeData.map((name, index) => (
            <ListItem key={name} number={++index}>
              {name}
            </ListItem>
          ))}
        </List>
      </ModalCard>
    </Modal>
  );
}
export default RespondedListView;
