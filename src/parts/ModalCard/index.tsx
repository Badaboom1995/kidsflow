import React from "react";
import { Wrapper } from "./styled";
function ModalCard(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
export default ModalCard;
