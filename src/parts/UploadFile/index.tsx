import React from "react";
import UploadFileView from "./view";

export interface IUploadFile {
  label?: string;
  bg?: string;
  file?: boolean;
  imageUrl?: string;
  uploadId?: string;
  organizationId?: string;
  onAdd?: (file: any) => void;
  onRemove?: (url?: string) => void;
}

function UploadFile(props: IUploadFile) {
  return <UploadFileView {...props} />;
}
export default UploadFile;
