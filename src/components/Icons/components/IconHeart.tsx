import React, {FC} from "react";

import {IIcon} from "../types";

export const IconHeart: FC<IIcon> = ({
  color,
  className,
  width,
  height,
  strokeColor,
}) => (
  <svg
    width={width || "22"}
    height={height ||"21"}
    fill={color || "#343434"}
    className={className}
    viewBox="0 0 22 21"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 19C7.38662 15.7733 1 11.7597 1 6.39509C1 3.37384 3.42 1 6.5 1C8.24 1 9.91 1.74442 11 3C12.09 1.74442 13.76 1 15.5 1C18.58 1.00001 21 3.37385 21 6.3951C21 11.751 14.6214 15.7907 11 19Z"
      stroke={strokeColor || "#343434"}
      strokeWidth="1.5"
    />
  </svg>
);


