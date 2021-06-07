import React, { useState } from "react";
import StatusHandlerView from "./view";

export interface IStatusHandler {
  options?: { name: string; status: "active" | "disabled" | "waiting" }[];
  current?: string;
  onChange?: (status: string) => void;
}

function StatusHandler({ current, options, onChange }: IStatusHandler) {
  const [active, setActive] = useState(current);
  const [open, setOpen] = useState(false);
  return (
    <StatusHandlerView
      options={options}
      active={active}
      open={open}
      setActive={setActive}
      setOpen={setOpen}
      onChange={onChange}
    />
  );
}
export default StatusHandler;
