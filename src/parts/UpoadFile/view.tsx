import React from "react";
import { Wrapper, Label } from "./styled";
import { IUpoadFile } from "./index";

function UpoadFileView({ label }: IUpoadFile) {
  return (
    <Wrapper>
      <Label>
        {label}
        <input type="file" />
      </Label>
    </Wrapper>
  );
}
export default UpoadFileView;
