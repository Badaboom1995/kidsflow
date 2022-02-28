import React, { useState } from "react";
import SelectView from "./view";

function FilterSelect(props) {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState(props.value);
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
  return <SelectView {...viewProps} />;
}
export default FilterSelect;
