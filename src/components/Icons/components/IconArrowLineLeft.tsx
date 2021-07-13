import React, {FC} from "react";

import {IIcon} from "../types";

export const IconArrowLineLeft: FC<IIcon> = ({
  color,
  className,
  width,
  height,
  strokeColor,
}) => (
  <svg
    width={width || "24"}
    height={height ||"24"}
    fill={color || "#343434"}
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 12H5" stroke={strokeColor || "#343434"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19L5 12L12 5" stroke={strokeColor || "#343434"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
