import React, {useState} from "react";

import {Wrapper, Preview, Label, CloseButton} from "./styled";

import {IUpoadFile} from "./index";

function UpoadFileView({label, file, onAdd, onRemove, imageUrl}: IUpoadFile) {
  const [src, setSrc] = useState(null);

  return (
    <Wrapper>
      <Preview file={file} image={imageUrl || src}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              setSrc(URL.createObjectURL(e.target.files[0]));
              onAdd && onAdd(e.target.files[0]);
            }}
          />
        </Label>
      </Preview>
      {(src || imageUrl) && (
        <CloseButton
          onClick={() => {
            onRemove && onRemove();
            setSrc(null);
          }}
        />
      )}
    </Wrapper>
  );
}

export default UpoadFileView;
