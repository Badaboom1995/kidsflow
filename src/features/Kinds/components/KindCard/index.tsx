import React from "react";
import { Wrapper, Inner, Name, Content, Icon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app";
import { chooseKind } from "features/Kinds/duck/slice";
import { setChoosedCategories } from "features/Categories/duck/slice";

function KindCard({ kind }: any) {
  const dispatch = useDispatch();
  const activeKind = useSelector((state: RootState) => state.kinds.activeKind);
  const { backgroundUrl, foregroundUrl, name } = kind;

  return (
    <Wrapper
      active={activeKind?.eventDirectionId === kind.eventDirectionId}
      onClick={() => {
        dispatch(chooseKind(kind));
        dispatch(setChoosedCategories([]));
      }}
    >
      <Inner background={backgroundUrl}>
        <Content>
          <Icon src={foregroundUrl} />
          <Name>{name}</Name>
        </Content>
      </Inner>
    </Wrapper>
  );
}
export default KindCard;
