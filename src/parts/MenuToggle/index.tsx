import React from "react";
import { Wrapper, Line } from "./styled";

interface IMenuToggle {
  open: boolean;
  onClick: () => void;
}

export default function MenuToggle({ open, onClick }: IMenuToggle) {
  return (
    <Wrapper open={open} onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
}
