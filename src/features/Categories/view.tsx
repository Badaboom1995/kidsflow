import { MainTitle } from "parts/typography";
import React from "react";
import { Wrapper, Cover, List, Item, Content, Alert, Empty } from "./styled";

interface ICategoriesView {
  categories: any[];
  coverImage: string;
  toggleCategory: (id: string) => void;
  activeCategories: string[];
}

function CategoriesView({
  categories,
  coverImage,
  toggleCategory,
  activeCategories,
}: ICategoriesView) {
  return (
    <Wrapper>
      <Content>
        <MainTitle>Категории</MainTitle>
        <Cover src={coverImage} />
        <List>
          {!categories.length && <Empty>Выберите категорию</Empty>}
          {categories.map((category) => (
            <Item
              active={activeCategories.includes(category.eventDirectionId)}
              key={category.eventDirectionId}
              onClick={() => {
                toggleCategory(category.eventDirectionId);
              }}
            >
              {category.name}
            </Item>
          ))}
        </List>

        <Alert visible={activeCategories.length >= 3}>
          Выбрано максимальное число категорий
        </Alert>
      </Content>
    </Wrapper>
  );
}
export default CategoriesView;
