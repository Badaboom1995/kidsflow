import React, { useState } from "react";
import { StyledDate } from "./styled";
import { Field, useFormikContext } from "formik";
import { IDateInput } from "./type";
import { Label } from "parts/styled";
import moment from "moment";

function DateInput<IDateInput>({ name, label }) {
  const [startDate, setStartDate] = useState(null);
  const { setFieldValue } = useFormikContext();
  const getDate = (value) => (value ? new Date(value) : new Date());

  return (
    <Field name={name}>
      {({ field }) => (
        <div>
          <Label>{label}</Label>
          <StyledDate
            name={name}
            selected={startDate || getDate(field.value)}
            onChange={(date) => {
              setFieldValue(
                name,
                moment(date?.toString()).format("YYYY-MM-DD")
              );
              setStartDate(date);
            }}
          />
        </div>
      )}
    </Field>
  );
}
export default DateInput;
