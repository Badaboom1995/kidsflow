import React from 'react';
import HighlightsAddView from './view';

import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectSortedStories } from './duck/selectors';

function HighlightsAdd() {
  const stories = useSelector(selectSortedStories);
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        console.log({ ...values, stories });
      }}
    >
      <HighlightsAddView stories={stories} />
    </Formik>
  );
}
export default HighlightsAdd;
