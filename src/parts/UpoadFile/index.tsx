import React from "react";
import UpoadFileView from "./view";

export interface IUpoadFile {
  label: string;
  bg?: string;
  file?: boolean;
  imageUrl?: string;
  uploadId?: string;
  organizationId?: string;
  onSuccess?: (result: any) => void;
  onRemove?: () => void;
}

function UpoadFile(props: IUpoadFile) {
  return <UpoadFileView {...props} />;
}
export default UpoadFile;
