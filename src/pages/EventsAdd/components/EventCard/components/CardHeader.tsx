import React from "react";

import {IconComment, IconDocument, IconStar} from "../../../../../components/Icons";

import {
  CoverMainInfo,
  MainInfoHead,
  MainInfoLogo,
  MainInfoStatus,
  MainInfoSub,
  MainInfoSubItem,
  MainInfoTitle,
  MainInfoCategory,
  MainInfoCategoryItem,
} from "../styled";
import {ICardHeader} from "../../../types";

function CardHeader({
 formState,
}:ICardHeader) {
  return (
    <CoverMainInfo>

      <MainInfoHead>
        <MainInfoStatus>
          организация проверена
        </MainInfoStatus>
        <MainInfoLogo>
          LOGO
        </MainInfoLogo>
      </MainInfoHead>

      <MainInfoTitle>
        {formState?.name ||  "Название огранизации"}
      </MainInfoTitle>

      <MainInfoSub>
        <MainInfoSubItem>
          <IconStar color="#FFC400" width={16}/>
          4.9
        </MainInfoSubItem>
        <MainInfoSubItem>
          <IconComment color="#FFC400" width={16}/>
          12 отзывов
        </MainInfoSubItem>
        <MainInfoSubItem>
          <IconDocument color="#FFC400" width={16}/>
          3 программы
        </MainInfoSubItem>
      </MainInfoSub>

      {formState?.category && (
        <MainInfoCategory>
          {formState?.category?.map((item, index) => (
            <MainInfoCategoryItem key={index}>
              {item}
            </MainInfoCategoryItem>
          ))}
        </MainInfoCategory>
      )}
    </CoverMainInfo>
  )
}

export default CardHeader;
