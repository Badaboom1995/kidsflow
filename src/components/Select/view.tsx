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

interface SelectView {
  isOpen: boolean;
  title?: string;
  toggleSelect?: () => void;
  options: string[];
  groupName: string;
  setSelected: (e: any) => void;
  selectedValue: string | null;
  error: string;
  touched: boolean;
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
          <Option key={option}>
            <OptionTitle>{option}</OptionTitle>
            <Radio
              type="radio"
              onChange={setSelected}
              name={groupName}
              value={option}
            />
          </Option>
        ))}
      </OptionsContainer>
    </Wrapper>
  );
}
export default SelectView;
