export type addImageProps = {
  method: (file) => Promise<any>;
  file: File;
};
export type deleteImageProps = {
  method: (orgId: string, uploadId: string) => Promise<any>;
  orgId: string;
  uploadId: string;
};
