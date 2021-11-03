export interface IUploadSection {
  onUpload?: (file) => Promise<any>;
  onExtraUpload?: (file, id) => Promise<any>;
  onExtraDelete?: ({ uploadId, id }) => Promise<any>;
  onDelete?: (file, id) => Promise<any>;
  loadedImages: string[];
  id?: string;
}
