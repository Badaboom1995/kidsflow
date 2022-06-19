import React, {useState, useRef, useEffect} from 'react';
import SelectView from './view';
import useOutsideAlerter from 'hooks/useOutsideAlerter';
import { TSelect } from './types';
import { useFormikContext } from 'formik';

function SelectNew(props: TSelect) {

  const [isOpen, setOpen] = useState(false);
  const { values, setFieldValue } = useFormikContext();
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
  useEffect(() => {
    setValue(null)
    setFieldValue(props.name, null)
  }, [props.options])
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
export default SelectNew;
