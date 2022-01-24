import { Wrapper, CheckboxBlock, Label } from './styled';
import React, { useState } from 'react';
import { CheckBox } from 'parts/Table/styled';
import { InlineButton } from 'parts/styled';
import { TGlobalControl } from '../../types';
interface IGlobalFunctions {
  toggleAllItems(isAllChecked): void;
  controls: TGlobalControl[];
  choosedItems: Record<string, any>[];
}

function GlobalFunctions(props: IGlobalFunctions) {
  const { toggleAllItems, controls, choosedItems } = props;
  const [isAllChecked, setAllChecked] = useState(false);

  return (
    <Wrapper>
      <CheckboxBlock
        onClick={() => {
          setAllChecked(!isAllChecked);
          toggleAllItems(isAllChecked);
        }}
      >
        <CheckBox selected={isAllChecked} />
        <Label>Выбрать все</Label>
      </CheckboxBlock>
      <div>
        {controls?.map((control) => (
          <InlineButton.default
            marginVertical="right"
            onClick={() => {
              control.method(choosedItems);
            }}
          >
            {control.buttonName}
          </InlineButton.default>
        ))}
        {/* <InlineButton.default marginVertical="right">
          изменить
        </InlineButton.default>
        <InlineButton.default marginVertical="right">
          копировать хайлайтс
        </InlineButton.default>
        <InlineButton.danger marginVertical="right">
          удалить
        </InlineButton.danger> */}
      </div>
    </Wrapper>
  );
}
export default GlobalFunctions;
