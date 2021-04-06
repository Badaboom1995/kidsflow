import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./styled";
import { BackButton } from "parts/styled";

function BackSection() {
  const history = useHistory();
  return (
    <Wrapper>
      <BackButton
        onClick={() => {
          history.goBack();
        }}
      >
        Назад
      </BackButton>
    </Wrapper>
  );
}
export default BackSection;
