import React from "react";
import { Overlay, Content } from "./styled";

interface IModal {
  isVisible: boolean;
  changeVisibility: (boolean) => void;
  children?: React.ReactElement | string;
}
function Modal({ isVisible, changeVisibility, children }: IModal) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      changeVisibility(false);
    }
  };
  return (
    <Overlay isVisible={isVisible} onClick={closeModal}>
      <Content>{children}</Content>
    </Overlay>
  );
}
export default Modal;
