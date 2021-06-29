import React from "react";
import { Wrapper, ImagePlaceholder } from "./styled";
import Table from "parts/Table";
import AddButton from "parts/AddButton";

function Catalog() {
  return (
    <Wrapper>
      <AddButton to="catalog/add" />
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
            props: { width: "9%" },
          },
          {
            label: "Иконка направления",
            key: "directionIcon",
            props: { width: "18%", textalign: "center" },
            getComponent: () => <ImagePlaceholder />,
          },
          {
            label: "Название планеты",
            key: "planetName",
            props: { width: "10%" },
          },
          {
            label: "Иконка планеты",
            key: "planetIcon",
            props: { width: "18%", textalign: "center" },
            getComponent: () => <ImagePlaceholder />,
          },
          {
            label: "Название категории",
            key: "categoryName",
            props: { width: "12%" },
          },
          {
            label: "Изображение категории",
            key: "categoryImage",
            props: { textalign: "center" },
            getComponent: () => <ImagePlaceholder />,
          },
        ]}
        items={[
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
          {
            id: 1,
            name: "Петров Константин Павлович",
            directionIcon: "",
            planetName: "ivan@mail.ru",
            planetIcon: "",
            categoryName: "Заблокирован",
            categoryImage: "Заблокирован",
          },
        ]}
      />
    </Wrapper>
  );
}
export default Catalog;
