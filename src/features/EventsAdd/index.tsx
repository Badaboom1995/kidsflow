import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import EventsAddView from "./view";
import { useParams, useHistory } from "react-router-dom";
import { sendEvent, bootstrapEvents } from "./duck/actions";
import {
  selectCurrentEvent,
  selectLoading,
  selectPrompts,
} from "./duck/selectors";
import { Formik } from "formik";
import { imagesSelector } from "parts/UploadSection/duck/selectors";
import { clearUploads } from "parts/UploadSection/duck/slice";
import Loader from "parts/Loader";
import { clearEventData } from "./duck/slice";
import moment from "moment";

function EventsAdd() {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentEvent = useSelector(selectCurrentEvent);
  const isLoading = useSelector(selectLoading);
  const orgPrompts = useSelector(selectPrompts);
  const uploads = useSelector(imagesSelector);

  const type = id ? "update" : "create";

  const defaultValues = {
    isActive: "active",
    time: moment("2021-10-28T09:00:00"),
  };
  useEffect(() => {
    dispatch(bootstrapEvents({ id }));
    return () => {
      dispatch(clearEventData());
      dispatch(clearUploads());
    };
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <Formik
          onSubmit={(values) => {
            dispatch(
              sendEvent({
                values: {
                  ...values,
                  uploadIds: uploads.map((item) => item.id),
                },
                type,
                eventId: id,
                history,
              })
            );
          }}
          initialValues={currentEvent || defaultValues}
        >
          {({ setFieldValue, handleChange }) => (
            <EventsAddView
              prompts={orgPrompts}
              currentEvent={currentEvent}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />
          )}
        </Formik>
      )}
    </Wrapper>
  );
}
export default EventsAdd;
