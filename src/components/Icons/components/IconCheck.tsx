import React, {FC} from "react";

import {IIcon} from "../types";

export const IconCheck: FC<IIcon> = ({
  color,
  className,
  width,
  height,
}) => (
  <svg
    width={width || "11"}
    height={height ||"7"}
    fill={color || "#343434"}
    className={className}
    viewBox="0 0 11 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.36328 3.20184L4.28536 5.72709L9.5451 1.18164" stroke={color || "#343434"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
