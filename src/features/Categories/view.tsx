import { Title } from "parts/typography";
import React from "react";
import { Wrapper, Cover, List, Item } from "./styled";

const categories = [
  { id: "1", name: "Акробатика" },
  { id: "2", name: "Бадминтон" },
  { id: "3", name: "Баскетбол" },
  { id: "4", name: "Бейсбол" },
  { id: "5", name: "Борьба" },
  { id: "6", name: "Велосипед" },
  { id: "7", name: "Водное поло" },
  { id: "8", name: "Волейбол" },
  { id: "9", name: "Выездка" },
  { id: "10", name: "Гандбол" },
  { id: "11", name: "Гимнастика" },
  { id: "12", name: "Гольф" },
  { id: "13", name: "Гребля академическая" },
  { id: "1", name: "Акробатика" },
  { id: "2", name: "Бадминтон" },
  { id: "3", name: "Баскетбол" },
  { id: "4", name: "Бейсбол" },
  { id: "5", name: "Борьба" },
  { id: "6", name: "Велосипед" },
  { id: "7", name: "Водное поло" },
  { id: "8", name: "Волейбол" },
  { id: "9", name: "Выездка" },
  { id: "10", name: "Гандбол" },
  { id: "11", name: "Гимнастика" },
];

function CategoriesView() {
  return (
    <Wrapper>
      <Title>спортивные категории</Title>
      <Cover src={"https://via.placeholder.com/350x258"} />
      <List>
        {categories.map((category) => (
          <Item active={category.id === "6"} key={category.id}>
            {category.name}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
export default CategoriesView;
