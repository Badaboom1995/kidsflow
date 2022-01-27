import React, { useState } from 'react';
import { Wrapper } from './styled';
import CompilationsAddView from './view';
import { Formik } from 'formik';
import Loader from 'parts/Loader';
import digestService from 'services/digests';

function CompilationsAdd() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <Formik
          onSubmit={(values: any, actions) => {
            const payload = {
              ...values,
              activeFrom: '2022-01-26T08:30:53.459Z',
              activeTo: '2022-01-26T08:30:53.459Z',
              isActive: values.isActive === 'active' ? true : false,
            };
            digestService.create({ payload }).then(() => actions.resetForm());
            actions.resetForm();
          }}
          initialValues={{}}
        >
          <CompilationsAddView />
        </Formik>
      )}
    </Wrapper>
  );
}
export default CompilationsAdd;
