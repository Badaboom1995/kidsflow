import React from "react";
import { Wrapper } from "./styled";
import UpoadFile from "parts/UpoadFile";
import { Row } from "./styled";

interface IMultyUploader {
  addLabel: string;
  onAdd: (file?: File) => void;
  onRemove: (id?: string) => void;
  items?: { id: string; url: string }[];
}

function MultyUploader({ addLabel, onAdd, onRemove, items }: IMultyUploader) {
  return (
    <Wrapper>
      <Row>
        {items?.map((item) => (
          <UpoadFile imageUrl={item.url} onRemove={() => onRemove(item.id)} />
        ))}
        <UpoadFile label={addLabel} onAdd={onAdd} />
      </Row>
    </Wrapper>
  );
}
export default MultyUploader;
