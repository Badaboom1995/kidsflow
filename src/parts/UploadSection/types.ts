export interface IUploadSection {
  onUpload?: (file) => Promise<any>;
  onExtraUpload?: (file, orgId) => Promise<any>;
  onExtraDelete?: (payload: { uploadId: any; orgId: string }) => Promise<any>;
  onDelete?: (file, orgId) => Promise<any>;
  images?;
  id?: string;
}
