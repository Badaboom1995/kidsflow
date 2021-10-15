import React, { useState } from "react";
import { StyledDate } from "./styled";
import { Field, useFormikContext } from "formik";
import { IDateInput } from "./type";
import { Label } from "parts/styled";
import moment from "moment";

function DateInput<IDateInput>({ name, label }) {
  const [startDate, setStartDate] = useState(new Date());
  const { setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {() => (
        <div>
          <Label>{label}</Label>
          <StyledDate
            name={name}
            selected={startDate}
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
