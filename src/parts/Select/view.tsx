import React from "react";
import ErrorContainier from "../ErrorContainier";
import { Label } from "../styled";
import { Field } from "formik";

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
  label,
  side,
}: any) {
  const showSelected = (selectedValue) =>
    options[0]?.value
      ? options.find((item) => item.value === selectedValue)?.name
      : selectedValue;

  return (
    <Wrapper open={isOpen}>
      <Label>{label}</Label>
      <ErrorContainier error={touched ? error : ""}>
        <SelectBox selected={!!selectedValue} onClick={toggleSelect}>
          {selectedValue ? showSelected(selectedValue) : title}
        </SelectBox>
      </ErrorContainier>
      <Field name={name}>
        {({ field }) => (
          <OptionsContainer>
            {!!options.length &&
              options.map((option, index) => (
                <Option key={index}>
                  <OptionTitle>{option.name}</OptionTitle>
                  <Radio
                    type="radio"
                    name={name}
                    value={option.value}
                    onChange={(value) => {
                      side && side(value);
                      setSelected(value);
                    }}
                  />
                </Option>
              ))}
          </OptionsContainer>
        )}
      </Field>
    </Wrapper>
  );
}
export default SelectView;
