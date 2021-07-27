import React, { useState } from "react";
import ErrorContainier from "../ErrorContainier";
import { StyledInput, Wrapper, InputContainer, Prompt, Option } from "./styled";
import { Label } from "../styled";
import { Field } from "formik";

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
  onChange: (value: string) => void;
  prompts: string[];
}

export default function Search({
  placeholder,
  error,
  icon,
  name,
  touched,
  label,
  centered,
  onChange,
  prompts,
  value,
}: ISearch) {
  const [searchInput, setSearchInput] = useState("");
  const [choosedAddress, setChoosedAddress] = useState("");

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <ErrorContainier error={touched ? error : ""}>
        <InputContainer icon={icon} centered={centered}>
          <StyledInput
            type={"text"}
            name={name}
            value={searchInput || value}
            onChange={(e) => {
              onChange(e.target.value);
              setSearchInput(e.target.value);
            }}
            placeholder={placeholder || "-- -- -- -- --"}
            centered={centered}
          />
        </InputContainer>
        {!!prompts.length && (
          <Field name={name} value={choosedAddress}>
            {({ field, form }) => (
              <Prompt>
                {prompts.map((item) => (
                  <Option
                    onClick={() => {
                      setSearchInput(item);
                      setChoosedAddress(item);
                      form.setFieldValue(name, item);
                      onChange("");
                    }}
                  >
                    {item}
                  </Option>
                ))}
              </Prompt>
            )}
          </Field>
        )}
      </ErrorContainier>
    </Wrapper>
  );
}
