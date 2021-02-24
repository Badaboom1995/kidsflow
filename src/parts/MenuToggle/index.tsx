import React from "react";
import { Wrapper, Line } from "./styled";

interface IMenuToggle {
  closed?: boolean;
  onClick: () => void;
}

export default function MenuToggle({ closed, onClick }: IMenuToggle) {
  return (
    <Wrapper closed={closed} onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
}
