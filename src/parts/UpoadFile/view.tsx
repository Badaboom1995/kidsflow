import React, { useState, useEffect } from "react";
import { Wrapper, Preview, Label, CloseButton } from "./styled";
import { IUpoadFile } from "./index";
import organizationsService from "services/organizations";
import { useDispatch } from "react-redux";

function UpoadFileView({ label, file, onSuccess }: IUpoadFile) {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);
  const [imageFile, setFile] = useState(null);
  useEffect(() => {
    if (src) {
      organizationsService.uploadImage(imageFile, onSuccess);
    }
  }, [src]);

  return (
    <Wrapper>
      <Preview file={file} image={src}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files);
              setFile(e.target.files[0]);
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
