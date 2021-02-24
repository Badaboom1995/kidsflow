import React from "react";
import { Wrapper, Inner, Name, Content, Icon } from "./styled";
import { setKind } from "ducks/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app";

function KindCard({ kind }: any) {
  const dispatch = useDispatch();
  const currentKindId = useSelector((state: RootState) => state.events.kindId);
  const { background, icon, label } = kind;

  return (
    <Wrapper
      active={currentKindId === kind.id}
      onClick={() => {
        dispatch(setKind(kind.id));
      }}
    >
      <Inner background={background}>
        <Content>
          <Icon src={icon} />
          <Name>{label}</Name>
        </Content>
      </Inner>
    </Wrapper>
  );
}
export default KindCard;
