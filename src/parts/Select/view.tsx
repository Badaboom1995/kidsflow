import React from "react";
import ErrorContainier from "../ErrorContainier";
import {
  Wrapper,
  OptionTitle,
  SelectBox,
  Radio,
  Option,
  OptionsContainer,
} from "./styled";

import { OptionType } from "./types";

interface SelectView {
  isOpen: boolean;
  title?: string;
  toggleSelect?: () => void;
  options: OptionType[];
  groupName: string;
  setSelected: (e: any) => void;
  selectedValue: string | null;
  error?: string;
  touched?: boolean;
}

function SelectView({
  isOpen,
  title,
  toggleSelect,
  options,
  groupName,
  setSelected,
  selectedValue,
  error,
  touched,
}: SelectView) {
  return (
    <Wrapper open={isOpen}>
      <ErrorContainier error={touched ? error : ""}>
        <SelectBox selected={!!selectedValue} onClick={toggleSelect}>
          {selectedValue ? selectedValue : title}
        </SelectBox>
      </ErrorContainier>
      <OptionsContainer>
        {options.map((option) => (
          <Option key={option.value}>
            <OptionTitle>{option.name}</OptionTitle>
            <Radio
              type="radio"
              onChange={setSelected}
              name={groupName}
              value={option.value}
            />
          </Option>
        ))}
      </OptionsContainer>
    </Wrapper>
  );
}
export default SelectView;
