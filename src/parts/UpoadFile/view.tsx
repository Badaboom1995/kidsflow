import React, { useState } from "react";
import { Wrapper, Preview, Label, CloseButton } from "./styled";
import { IUpoadFile } from "./index";

function UpoadFileView({ label, file }: IUpoadFile) {
  const [src, setSrc] = useState(null);

  return (
    <Wrapper>
      <Preview file={file} image={src}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              setSrc(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </Label>
      </Preview>
      {src && (
        <CloseButton
          onClick={() => {
            setSrc(null);
          }}
        />
      )}
    </Wrapper>
  );
}
export default UpoadFileView;
