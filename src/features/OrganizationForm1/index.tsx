import React, {useEffect, useState} from 'react';
import HighlightsAddView from './view';

import { useStateBootstrap } from 'hooks/useBootstrap';
import { Formik } from 'formik';
import Loader from 'parts/Loader';
import { orgActions} from './actions';
import { getDirections, getCategories, getCategoriesHigh, getPartners, getStations } from 'ducks/dicts/actions';
import { useDispatch } from 'react-redux';
import DataBuilder from "utils/dataBuilder";

function OrganizationForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDirections('OrganizationDirection'));
    dispatch(getCategories('OrganizationDirection'));
    dispatch(getCategoriesHigh('OrganizationDirection'));
    dispatch(getPartners())
    dispatch(getStations())
  }, []);

  const { method, initialValues, isDataLoading } = useStateBootstrap({
    successUrl: '/orgs',
    ...orgActions,
  });

  return isDataLoading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={initialValues || {
        businessHours: [
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 0,
            completed: true
          },
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 1,
            completed: true
          },
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 2,
            completed: true
          },
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 3,
            completed: true
          },
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 4,
            completed: true
          },
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 5,
            completed: true
          },
          {
            openTime: "9:00",
            closeTime: "21:00",
            day: 6,
            completed: true
          }
        ]
      }}
      onSubmit={(values,actions) => {
        console.log(values)
        method(values, actions)
      }}
    >
     <div>
       {console.log(initialValues)}
       <HighlightsAddView />
     </div>

    </Formik>
  );
}

export default OrganizationForm;
