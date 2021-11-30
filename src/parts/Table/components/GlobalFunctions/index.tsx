import { Wrapper, CheckboxBlock, Label } from "./styled";
import React, { useState } from "react";
import { CheckBox } from "parts/Table/styled";
import { InlineButton } from "parts/styled";

function GlobalFunctions({ setCheckedAll }) {
  const [checked, setChecked] = useState(false);
  return (
    <Wrapper>
      <CheckboxBlock
        onClick={() => {
          setChecked(!checked);
          setCheckedAll(checked);
        }}
      >
        <CheckBox selected={checked} />
        <Label>Выбрать все</Label>
      </CheckboxBlock>
      <div>
        <InlineButton.default marginVertical="right">
          изменить
        </InlineButton.default>
        <InlineButton.default marginVertical="right">
          копировать хайлайтс
        </InlineButton.default>
        <InlineButton.danger marginVertical="right">
          удалить
        </InlineButton.danger>
      </div>
    </Wrapper>
  );
}
export default GlobalFunctions;
