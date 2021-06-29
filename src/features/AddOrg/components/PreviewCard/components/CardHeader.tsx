import React from "react";

import {
  CoverMainInfo,
  MainInfoTitle,
  MainInfoCategory,
  MainInfoCategoryItem,
} from "../styled";

import {ICardHeader} from "../../../types";

function CardHeader({generalFormState}:ICardHeader) {


  return (
    <CoverMainInfo>

      <MainInfoTitle>
        {generalFormState?.name ||  "Название огранизации"}
      </MainInfoTitle>

      {/*{generalFormState?.category && (*/}
      {/*  <MainInfoCategory>*/}
      {/*    {generalFormState?.category?.map((item, index) => (*/}
      {/*      <MainInfoCategoryItem key={index}>*/}
      {/*        {item}*/}
      {/*      </MainInfoCategoryItem>*/}
      {/*    ))}*/}
      {/*  </MainInfoCategory>*/}
      {/*)}*/}
    </CoverMainInfo>
  )
}

export default CardHeader;
