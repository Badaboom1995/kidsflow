export type addImageProps = {
  method: (file, id?) => Promise<any>;
  file: File;
};
export type deleteImageProps = {
  method: (payload: { id: string, uploadId: string }) => Promise<any>;
  id: string;
  uploadId: string;
};
