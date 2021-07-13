import React from "react";
import ErrorContainier from "parts/ErrorContainier";
import { Label } from "parts/styled";
import {
  Wrapper,
  OptionTitle,
  SelectBox,
  Radio,
  Option,
  OptionsContainer,
} from "./styled";

function SelectView({
  isOpen,
  title,
  toggleSelect,
  options,
  name,
  setSelected,
  selectedValue,
  error,
  touched,
  side,
}) {
  const showSelected = (selectedValue) =>
    options[0]?.value
      ? options.find((item) => item.value === selectedValue)?.name
      : selectedValue;

  return (
    <Wrapper open={isOpen}>
      <ErrorContainier error={touched ? error : ""}>
        <SelectBox selected={!!selectedValue} onClick={toggleSelect}>
          {selectedValue ? showSelected(selectedValue) : title}
        </SelectBox>
      </ErrorContainier>
      <OptionsContainer>
        {options?.map(
          (option) =>
            option.name &&
            option.value && (
              <Option key={option?.value || option}>
                <OptionTitle>{option?.name || option}</OptionTitle>
                <Radio
                  type="radio"
                  onChange={(value) => {
                    side && side(value);
                    setSelected(value);
                  }}
                  name={name}
                  value={option?.value || option}
                />
              </Option>
            )
        )}
      </OptionsContainer>
    </Wrapper>
  );
}
export default SelectView;
