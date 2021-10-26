import React from "react";
import { StyledTime } from "./styled";
import { Field, useFormikContext } from "formik";
import { ITimeInput } from "./type";
import TimePicker from "rc-time-picker";
import { Label } from "parts/styled";
import moment from "moment";

function TimeInput<ITimeInput>({ name, label }) {
  const { setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field }) => (
        <StyledTime>
          <Label>{label}</Label>
          <TimePicker
            showSecond={false}
            value={moment(field.value)}
            onChange={(time) => {
              setFieldValue(name, time.toString());
            }}
          />
        </StyledTime>
      )}
    </Field>
  );
}
export default TimeInput;
