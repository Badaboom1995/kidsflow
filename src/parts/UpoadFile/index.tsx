import React from "react";
import UpoadFileView from "./view";
import {TUploadedImage} from "../../pages/EventsAdd/types";

export interface IUpoadFile {
  label: string;
  bg?: string;
  file?: boolean;
  setUploadedImages?: any; // ToDo remove any types
  uploadedImages?: TUploadedImage[];
  imageUrl?: string;
  uploadId?: string;
  organizationId?: string;
  onAdd?: (file: any) => void;
  onRemove?: () => void;
}

function UpoadFile(props: IUpoadFile) {
  return <UpoadFileView {...props} />;
}
export default UpoadFile;
