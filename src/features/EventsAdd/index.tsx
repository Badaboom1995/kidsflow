import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDirections, getCategories, getPartners } from "ducks/dicts/actions";
import { Wrapper } from "./styled";
import EventsAddView from "./view";
import { useParams, useHistory } from "react-router-dom";
import { createEvent, getEventById } from "./duck/actions";
import {
  selectCurrentEvent,
  selectLoading,
  selectPrompts,
} from "./duck/selectors";
import { Formik } from "formik";
import { imagesSelector } from "parts/UploadSection/duck/selectors";

function EventsAdd() {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentEvent = useSelector(selectCurrentEvent);
  const isLoading = useSelector(selectLoading);
  const orgPrompts = useSelector(selectPrompts);
  const uploads = useSelector(imagesSelector);

  useEffect(() => {
    id && dispatch(getEventById(id));
    dispatch(getDirections());
    dispatch(getCategories());
    dispatch(getPartners());
  }, []);

  return (
    <Wrapper>
      <Formik
        onSubmit={(values) => {
          dispatch(
            createEvent({
              values: {
                ...values,
                uploadIds: uploads.map((item) => item.id),
              },
              history,
            })
          );
        }}
        initialValues={currentEvent || { isActive: "active" }}
      >
        {({ setFieldValue, handleChange }) => (
          <EventsAddView
            prompts={orgPrompts}
            currentEvent={currentEvent}
            isLoading={isLoading}
            setFieldValue={setFieldValue}
            handleChange={handleChange}
          />
        )}
      </Formik>
    </Wrapper>
  );
}
export default EventsAdd;
