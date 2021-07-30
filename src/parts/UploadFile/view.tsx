import React from "react";
import { Wrapper, Preview, Label, CloseButton } from "./styled";
import { IUploadFile } from "./index";

function UpoadFileView({
  label,
  file,
  onAdd,
  onRemove,
  imageUrl,
}: IUploadFile) {
  return (
    <Wrapper>
      <Preview file={file} image={imageUrl}>
        <Label>
          {label}
          <input
            type="file"
            multiple
            onChange={(e) => {
              Array.from(e.target.files).forEach((item) => onAdd(item));
            }}
          />
        </Label>
      </Preview>
      {imageUrl && (
        <CloseButton
          onClick={() => {
            onRemove();
          }}
        />
      )}
    </Wrapper>
  );
}

export default UpoadFileView;
