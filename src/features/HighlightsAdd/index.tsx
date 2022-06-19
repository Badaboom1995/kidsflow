import React from 'react';
import HighlightsAddView from './view';

import { useStateBootstrap } from 'hooks/useBootstrap';
import { Formik } from 'formik';
import Loader from 'parts/Loader';
import { highlightActions } from './actions';
import { HighlighType } from './types';

interface IBootstrap {
  initialValues: HighlighType;
  method: any;
  isDataLoading: boolean;
}

function HighlightsAdd() {
  const { method, initialValues, isDataLoading } = useStateBootstrap({
    successUrl: '/highlights',
    ...highlightActions,
  });

  return isDataLoading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={initialValues || { isActive: '0', stories: [] }}
      onSubmit={method}
    >
      <div>
        <HighlightsAddView />
      </div>
    </Formik>
  );
}
export default HighlightsAdd;
