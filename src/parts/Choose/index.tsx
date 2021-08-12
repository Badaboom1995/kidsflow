import useOutsideAlerter from "hooks/useOutsideAlerter";
import React, { ReactNode, useState, useRef } from "react";
import ChooseView from "./view";

export interface IChoose {
  options?: { name: string; status: string }[];
  current?: string;
  onChange?: (status: string) => void;
  getViewComponent?: (status, name) => ReactNode;
}

function Choose(props: IChoose) {
  const { current, options, onChange, getViewComponent } = props;
  const [active, setActive] = useState(current);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter({
    ref: wrapperRef,
    onEvent: () => {
      setOpen(false);
    },
  });

  return (
    <div ref={wrapperRef}>
      <ChooseView
        options={options}
        active={active}
        open={open}
        setActive={setActive}
        setOpen={setOpen}
        onChange={onChange}
        getViewComponent={getViewComponent}
        {...props}
      />
    </div>
  );
}
export default Choose;
