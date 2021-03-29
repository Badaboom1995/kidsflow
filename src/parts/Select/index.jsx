import React, { useState } from "react";
import SelectView from "./view";

function Select(props) {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState(null);
  const toggleSelect = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };
  const setSelected = (e) => {
    setValue(e.target.value);
    setOpen(false);
    console.log(e.target.value);
    props.onChange(e);
  };
  const viewProps = {
    isOpen,
    toggleSelect,
    selectedValue,
    setSelected,
    ...props,
  };
  return <SelectView {...viewProps} />;
}
export default Select;
