import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, BackButton } from "./styled";

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
