import React, { ReactNode } from "react";
import {
  Wrapper,
  StatusContainer,
  Dropdown,
  DropdownItem,
  StatusArea,
} from "./styled";

interface IChooseView {
  options: { name: string; status: string }[];
  active: string;
  open: boolean;
  setActive: (name: string) => void;
  setOpen: (name: boolean) => void;
  onChange: (status: string) => void;
  getViewComponent: (status, name) => ReactNode;
}

function ChooseView({
  options,
  active,
  open,
  setActive,
  setOpen,
  onChange,
  getViewComponent,
}: IChooseView) {
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
          {getViewComponent ? (
            getViewComponent(status, name)
          ) : (
            <span>{name}</span>
          )}
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

export default ChooseView;
