import React from "react";
import { Wrapper, Preview, Label, CloseButton } from "./styled";
import { IUpoadFile } from "./index";

function UpoadFileView({ label, file, onAdd, onRemove, imageUrl }: IUpoadFile) {
  return (
    <Wrapper>
      <Preview file={file} image={imageUrl}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              onAdd(e.target.files[0]);
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
