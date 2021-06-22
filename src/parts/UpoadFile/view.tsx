import React, { useState, useEffect } from "react";
import { Wrapper, Preview, Label, CloseButton } from "./styled";
import { IUpoadFile } from "./index";
import organizationsService from "services/organizations";

function UpoadFileView({
  label,
  file,
  onSuccess,
  onRemove,
  imageUrl,
  uploadId,
  organizationId,
}: IUpoadFile) {
  const [src, setSrc] = useState(null);
  const [imageFile, setFile] = useState(null);
  useEffect(() => {
    if (src) {
      organizationsService.uploadImage(imageFile, onSuccess);
    }
  }, [src]);

  return (
    <Wrapper>
      <Preview file={file} image={imageUrl || src}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setSrc(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </Label>
      </Preview>
      {(src || imageUrl) && (
        <CloseButton
          onClick={() => {
            onRemove();
            setSrc(null);
          }}
        />
      )}
    </Wrapper>
  );
}
export default UpoadFileView;
