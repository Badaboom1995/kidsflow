import React from "react";
import {
  ChildArea,
  ChildData,
  Name,
  ChildType,
  AddFormButton,
} from "../styled";
import { GlassCard } from "parts/styled";

type ChildDataType = { name: string; surname: string };

export const ChildControls = ({
  childrenData,
  childFormRef,
}: {
  childrenData: ChildDataType[];
  childFormRef: React.RefObject<HTMLFormElement>;
}) => (
  <ChildArea>
    {childrenData.map((item) => (
      <ChildData>
        <Name>{`${item.name} ${item.surname}`}</Name>
        <ChildType>Кастинг</ChildType>
      </ChildData>
    ))}
    <GlassCard style={{ marginRight: "10px" }}>
      <AddFormButton onClick={childFormRef?.current.handleSubmit}>
        добавить анкету ребенка
      </AddFormButton>
    </GlassCard>
  </ChildArea>
);
