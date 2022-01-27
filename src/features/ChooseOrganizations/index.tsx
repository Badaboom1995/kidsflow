import React from 'react';
import ChooseOrganizationsView from './view';
import { Field } from 'formik';
interface IChooseOrganizations {
  callback(ids: string[]): void;
  name: string;
}
function ChooseOrganizations({ callback, name }: IChooseOrganizations) {
  return (
    <Field>
      {({ form }) => (
        <ChooseOrganizationsView
          setFieldValue={form.setFieldValue}
          name={name}
          callback={callback}
        />
      )}
    </Field>
  );
}
export default ChooseOrganizations;
