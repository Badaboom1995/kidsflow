import React from "react";
import UpoadFileView from "./view";

export interface IUpoadFile {
  label: string;
  bg?: string;
}

function UpoadFile(props: IUpoadFile) {
  return <UpoadFileView {...props} />;
}
export default UpoadFile;
