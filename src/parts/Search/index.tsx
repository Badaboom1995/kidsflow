import React, { useState } from 'react';
import ErrorContainier from '../ErrorContainier';
import { StyledInput, Wrapper, InputContainer, Prompt, Option } from './styled';
import { Label } from '../styled';
import { Field } from 'formik';
import { TDict } from 'common/types';

interface ISearch {
  placeholder?: string;
  error?: string;
  icon?: string;
  name: string;
  password?: boolean;
  touched?: boolean;
  label?: string;
  centered?: boolean;
  value?: string;
  prompts: TDict[];
  onChange: (value: string) => void;
  onChoose?: (value: TDict) => void;
}

export default function Search({
  placeholder,
  error,
  icon,
  name,
  touched,
  label,
  centered,
  prompts,
  value,
  onChange,
  onChoose,
}: ISearch) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Field name={name}>
      {({ form }) => (
        <Wrapper>
          {label && <Label>{label}</Label>}
          <ErrorContainier error={touched ? error : ''}>
            <InputContainer icon={icon} centered={centered}>
              <StyledInput
                type={'text'}
                name={name}
                value={searchInput || value || form.values[name]}
                onChange={(e) => {
                  onChange(e.target.value);
                  setSearchInput(e.target.value);
                }}
                placeholder={placeholder || '-- -- -- -- --'}
                centered={centered}
              />
            </InputContainer>
            {!!prompts.length && (
              <Prompt>
                {prompts.map((item) => (
                  <Option
                    key={item.name}
                    onClick={() => {
                      setSearchInput(item.name);
                      onChoose && onChoose(item);
                      form.setFieldValue(name, item.value);
                    }}
                  >
                    {item.name}
                  </Option>
                ))}
              </Prompt>
            )}
          </ErrorContainier>
        </Wrapper>
      )}
    </Field>
  );
}
