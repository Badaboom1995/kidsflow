import React from "react";

import {IconCross} from "../../components/Icons";

import {
  CategoryChipsList,
  CategoryChipsItem,
  CategoryChipsTitle,
  CategoryChipsText,
  HiddenCheckbox,
  Wrapper,
} from "./styled";
import { ICategoryChips } from "./types";

function CategoryChips({
  title,
  text,
  list,
  value,
  name,
}:ICategoryChips) {
  return(
    <Wrapper>
      {title && <CategoryChipsTitle>{title}</CategoryChipsTitle>}
      {text && <CategoryChipsText>{text}</CategoryChipsText>}
      <CategoryChipsList>
        {list?.map((item) => (
          <CategoryChipsItem
            key={item.value}
            className={value.includes(item.value) && "active"}
          >
            <HiddenCheckbox
              key={item.value}
              type="checkbox"
              name={name}
              value={item.value}
             />
            {value.includes(item.value) && <IconCross width={10} height={10}/>}
            {item.name}
          </CategoryChipsItem>
        ))}
      </CategoryChipsList>
    </Wrapper>
  );
}

export default CategoryChips;
