import React, {FC} from "react";

import {IIcon} from "../types";

export const IconClock: FC<IIcon> = ({
  color,
  className,
  width,
  height,
}) => (
  <svg
    width={width || "18"}
    height={height ||"18"}
    fill="none"
    className={className}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color || "#343434"}
      d="M18 9C18 13.9716 13.9707 18 9 18C4.0293 18 0 13.9716 0 9C0 4.0302 4.0293 0 9 0C13.9707 0 18 4.0302 18 9Z"/>
    <path
      fill="white"
      d="M12.2163 12.4327C12.0984 12.4327 11.9796 12.4021 11.8707 12.3382L8.33729 10.2304C8.13389 10.108 8.00879 9.88752 8.00879 9.64992V5.10762C8.00879 4.73502 8.31119 4.43262 8.68379 4.43262C9.05639 4.43262 9.35879 4.73502 9.35879 5.10762V9.26652L12.5628 11.1772C12.8823 11.3689 12.9876 11.7829 12.7968 12.1033C12.6699 12.3148 12.4458 12.4327 12.2163 12.4327Z"/>
  </svg>
);


