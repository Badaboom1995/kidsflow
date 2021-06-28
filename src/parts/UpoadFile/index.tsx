import React, {Dispatch, SetStateAction} from "react";
import UpoadFileView from "./view";
import {TUploadedImage} from "../../pages/EventsAdd/types";

export interface IUpoadFile {
  label: string;
  bg?: string;
  file?: boolean;
  onSuccess?: (result: any) => void;
  setUploadedImages?: any; // ToDo remove any types
  uploadedImages?: TUploadedImage[];
}

function UpoadFile(props: IUpoadFile) {
  return <UpoadFileView {...props} />;
}
export default UpoadFile;
