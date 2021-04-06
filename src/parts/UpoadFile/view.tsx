import React, { useState } from "react";
import { Wrapper, Label } from "./styled";
import { IUpoadFile } from "./index";

function UpoadFileView({ label, file }: IUpoadFile) {
  const [src, setSrc] = useState(null);
  return (
    <Wrapper file={file} image={src}>
      <Label>
        {label}
        <input
          type="file"
          onChange={(e) => {
            setSrc(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </Label>
    </Wrapper>
  );
}
export default UpoadFileView;
