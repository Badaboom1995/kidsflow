import React, { useState, useRef } from "react";
import SelectView from "./view";
import useOutsideAlerter from "hooks/useOutsideAlerter";
import { TSelect } from "./types";

function Select(props: TSelect) {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState(props.value);
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
