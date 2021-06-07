import React from "react";
import {
  Wrapper,
  StatusContainer,
  Dropdown,
  DropdownItem,
  StatusArea,
} from "./styled";
import { Status } from "parts/styled";

interface IStatusHandlerView {
  options: { name: string; status: string }[];
  active: string;
  open: boolean;
  setActive: (name: string) => void;
  setOpen: (name: boolean) => void;
  onChange: (status: string) => void;
}

function StatusHandlerView({
  options,
  active,
  open,
  setActive,
  setOpen,
  onChange,
}: IStatusHandlerView) {
  const { name, status } = options?.find((option) => option.name === active);
  return (
    <Wrapper>
      <StatusArea>
        <StatusContainer
          open={open}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Status status={status}>{name}</Status>
        </StatusContainer>
        {open && (
          <Dropdown>
            {options.map((item) => (
              <DropdownItem
                onClick={() => {
                  setActive(item.name);
                  onChange(item.status);
                  setOpen(false);
                }}
              >
                {item.name}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </StatusArea>
    </Wrapper>
  );
}

export default StatusHandlerView;
