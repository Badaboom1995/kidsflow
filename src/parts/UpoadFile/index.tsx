import React from "react";
import UpoadFileView from "./view";

export interface IUpoadFile {
  label: string;
  bg?: string;
  file?: boolean;
  onSuccess?: (result: any) => void;
}

function UpoadFile(props: IUpoadFile) {
  return <UpoadFileView {...props} />;
}
export default UpoadFile;
