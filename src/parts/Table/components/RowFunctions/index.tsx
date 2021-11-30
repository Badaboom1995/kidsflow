import { RowFunctions, FuncsMenu, FunctionRow } from "./styled";
import React, { useState, useRef } from "react";
import { TRowFunctions } from "./types";
import useOutsideAlerter from "hooks/useOutsideAlerter";

function RowFuncsMenu({ functions }: TRowFunctions) {
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter({
    ref: wrapperRef,
    onEvent: () => {
      setMenuOpen(false);
    },
  });
  return (
    <RowFunctions
      ref={wrapperRef}
      open={menuOpen}
      onClick={(e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
      }}
    >
      <span />
      {menuOpen && (
        <FuncsMenu>
          {functions.map((item) => (
            <FunctionRow
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
              }}
            >
              {item.name}
            </FunctionRow>
          ))}
        </FuncsMenu>
      )}
    </RowFunctions>
  );
}
export default RowFuncsMenu;
