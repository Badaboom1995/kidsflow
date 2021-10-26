import React, { useState, useRef } from "react";
import SelectView from "./view";
import useOutsideAlerter from "hooks/useOutsideAlerter";
import { TSelect } from "./types";
import { useFormikContext } from "formik";

function Select(props: TSelect) {
  const [isOpen, setOpen] = useState(false);
  const { values } = useFormikContext();
  const [selectedValue, setValue] = useState(props.value || values[props.name]);
  const ref = useRef(null);
  const toggleSelect = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };
  const setSelected = (e) => {
    setValue(e.target.value);
    setOpen(false);
    props.onChange(e);
  };
  const viewProps = {
    isOpen,
    toggleSelect,
    selectedValue,
    setSelected,
    ...props,
  };

  useOutsideAlerter({
    ref,
    onEvent: () => {
      setOpen(false);
    },
  });

  return (
    <div ref={ref}>
      <SelectView {...viewProps} />
    </div>
  );
}
export default Select;
