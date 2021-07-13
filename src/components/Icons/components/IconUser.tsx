import React, {FC} from "react";

import {IIcon} from "../types";

export const IconUser: FC<IIcon> = ({
  color,
  className,
  width,
  height,
}) => (
  <svg
    width={width || "16"}
    height={height ||"20"}
    fill={color || "#343434"}
    className={className}
    viewBox="0 0 8 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7 2.99972C7 4.66484 5.66553 6 4 6C2.33503 6 1 4.66484 1 2.99972C1 1.33459 2.33503 0 4 0C5.66553 0 7 1.33459 7 2.99972ZM4 10C1.83119 10 0 9.69016 0 8.49473C0 7.29886 1.84269 7 4 7C6.16931 7 8 7.30984 8 8.50527C8 9.70114 6.15731 10 4 10Z"/>
  </svg>
);


