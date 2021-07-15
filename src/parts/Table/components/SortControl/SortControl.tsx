import React, { useState, useEffect } from "react";
import { Wrapper, Arrow } from "./styled";
import arrow from "../../assets/sortArrow.svg";
import { TStatus } from "../../types";

interface ISortControl {
  name: string;
  children: string;
  callback: (name: string, status: TStatus) => void;
}
const SortControl = ({ children, name, callback }: ISortControl) => {
  const [currentSatus, setCurrentSatus] = useState<TStatus>(null);

  const chooseStatus = () =>
    currentSatus === 0 || currentSatus === null
      ? setCurrentSatus(1)
      : setCurrentSatus(0);

  useEffect(() => {
    if (currentSatus !== null) callback(name, currentSatus);
  }, [currentSatus]);

  return (
    <Wrapper onClick={chooseStatus}>
      <Arrow reverse={!!currentSatus} src={arrow} />
      {children}
    </Wrapper>
  );
};
export default SortControl;
