import React, { useState } from "react";
import SelectView from "./view";
import { SelectInterface } from "./types";

function Select(props: SelectInterface) {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState(null);
  const toggleSelect = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };
  const setSelected = (e: any) => {
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
export default Select;
