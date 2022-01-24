import React, { useState, useEffect } from 'react';
import { Wrapper, Arrow } from './styled';
import arrow from '../../assets/sortArrow.svg';
import { TSortDirection, TSortFunction } from '../../types';

interface ISortControl {
  name: string;
  children: string;
  callback: TSortFunction;
}
const SortControl = ({ children, name, callback }: ISortControl) => {
  const [currentDirection, setCurrentSatus] = useState<TSortDirection>(0);

  const chooseStatus = () =>
    currentDirection === 0 ? setCurrentSatus(1) : setCurrentSatus(0);

  useEffect(() => {
    if (currentDirection !== null)
      callback({ fieldName: name, sortDirection: currentDirection });
  }, [currentDirection]);

  return (
    <Wrapper onClick={chooseStatus}>
      <Arrow reverse={!!currentDirection} src={arrow} />
      {children}
    </Wrapper>
  );
};
export default SortControl;
