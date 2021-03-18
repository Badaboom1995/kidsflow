import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFormState } from "./selectors";
import { toggle } from "./duck/slice";

import ContactFormView from "./view";

function ContactForm() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectFormState);
  const closePopUp = () => {
    dispatch(toggle());
  };
  return (
    <Formik onSubmit={() => {}} initialValues={{}}>
      <ContactFormView close={closePopUp} isOpen={isOpen} />
    </Formik>
  );
}
export default ContactForm;
