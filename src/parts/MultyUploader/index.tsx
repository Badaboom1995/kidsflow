import React from 'react';
import { Wrapper } from './styled';
import UploadFile from 'parts/UploadFile';
import { Row } from './styled';

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
          <UploadFile
            key={item.url}
            imageUrl={item.url}
            onRemove={() => {
              return onRemove(item.id);
            }}
          />
        ))}
        <UploadFile label={addLabel} onAdd={onAdd} />
      </Row>
    </Wrapper>
  );
}
export default MultyUploader;
