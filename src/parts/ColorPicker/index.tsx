import React, { useState, useRef } from 'react';
import { Wrapper, Circle, Picker } from './styled';
import { CirclePicker } from 'react-color';
import { Field } from 'formik';
import { Label } from 'parts/styled';
import useOutsideAlerter from 'hooks/useOutsideAlerter';

interface IColorPicker {
  name: string;
  label?: string;
  value?: string;
  onChange?: (color: Record<string, string>) => void;
}

function ColorPicker({ name, value, onChange, label }: IColorPicker) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideAlerter({
    ref,
    onEvent: () => {
      setOpen(false);
    },
  });
  return (
    <Field name={name}>
      {({ form, field }) => (
        <Wrapper ref={ref}>
          <Label>{label || 'Цвет'}</Label>
          {isOpen && (
            <Picker>
              <CirclePicker
                onChangeComplete={(color) => {
                  form.setFieldValue(name, color.hex);
                  onChange && onChange(color);
                  setOpen(false);
                }}
              />
            </Picker>
          )}
          <Circle
            color={field.value || value}
            onClick={() => {
              setOpen(true);
            }}
          />
        </Wrapper>
      )}
    </Field>
  );
}
export default ColorPicker;
