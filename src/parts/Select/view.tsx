import React from 'react';
import ErrorContainier from '../ErrorContainier';
import { Subtitle, Space, Label } from 'parts/styled';
import { Field } from 'formik';

import {
  Wrapper,
  OptionTitle,
  SelectBox,
  Radio,
  Option,
  OptionsContainer,
} from './styled';

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
  description,
  side,
}: any) {

  const getTitle = () => {

  }
  const showSelected = (selectedValue) => {
    return options[0]?.value
      ? options.find((item) => item.value === selectedValue)?.name
      : selectedValue;
  };

  return (
    <Wrapper open={isOpen}>
      <Label>
        {label ? label : <Space />}
        {description && <Subtitle>{description}</Subtitle>}
      </Label>
      <ErrorContainier error={touched ? error : ''}>
        <SelectBox selected={!!selectedValue} onClick={toggleSelect}>
          {selectedValue ? showSelected(selectedValue) : title}
        </SelectBox>
      </ErrorContainier>
      <Field name={name}>
        {({ form, field }) => (
          <OptionsContainer>
            {!!options?.length &&
              options.map((option, index) => (
                <Option key={index}>
                  <OptionTitle>{option.name}</OptionTitle>
                  <Radio
                    type="radio"
                    name={name}
                    value={option.value || field.value}
                    onChange={(value) => {
                      side && side(value);
                      setSelected(value);
                      form.setFieldValue(name, option.value);
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
