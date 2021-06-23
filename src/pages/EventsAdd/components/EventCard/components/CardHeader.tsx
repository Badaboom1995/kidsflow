import React from "react";

import {IconComment, IconDocument, IconStar} from "../../../../../components/Icons";

import {
  CoverMainInfo,
  MainInfoHead,
  MainInfoLogo,
  MainInfoStatus,
  MainInfoSub,
  MainInfoSubItem,
  MainInfoTitle
} from "../styled";
import {TFormState} from "../../../index";

export interface ICardHeader {
  formState: TFormState;
}

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

    </CoverMainInfo>
  )
}

export default CardHeader;
