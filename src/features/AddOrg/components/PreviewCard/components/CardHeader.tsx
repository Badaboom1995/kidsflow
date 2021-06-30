import React, {useEffect, useState} from "react";

import {
  CoverMainInfo,
  MainInfoTitle,
  MainInfoCategory,
  MainInfoCategoryItem,
} from "../styled";

import {ICardHeader} from "../../../types";

function CardHeader({generalFormState}:ICardHeader) {

  const [categoryArray, setCategoryArray] = useState<string | any[]>();

  console.log("categoryArray", categoryArray)

  useEffect(() => {
    if(Array.isArray(generalFormState?.category)){
      const newArray = Array.from(generalFormState.category)
      setCategoryArray(newArray);
    } else setCategoryArray(generalFormState?.category);
  }, [generalFormState?.category])


  return (
    <CoverMainInfo>

      <MainInfoTitle>
        {generalFormState?.name ||  "Название огранизации"}
      </MainInfoTitle>

      {!!categoryArray?.length && (
        Array.isArray(categoryArray) ? (
          <MainInfoCategory>
            {categoryArray.map((item: string, index) => (
              <MainInfoCategoryItem key={index}>
                {item}
              </MainInfoCategoryItem>
            ))}
          </MainInfoCategory>
        ) : (
          <MainInfoCategory>
            <MainInfoCategoryItem>
              {categoryArray}
            </MainInfoCategoryItem>
          </MainInfoCategory>
        )
      )}
    </CoverMainInfo>
  )
}

export default CardHeader;
