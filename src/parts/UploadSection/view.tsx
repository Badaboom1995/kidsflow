import React from 'react';
import { Wrapper } from './styled';
import MultyUploader from 'parts/MultyUploader';

const UploadSectionView = ({
  id,
  onUpload,
  onDelete,
  onExtraUpload,
  onExtraDelete,
  images,
}: any) => {
  return (
    <Wrapper>
      {id ? (
        <>
          <MultyUploader
            onAdd={(file) => onExtraUpload(file, id)}
            onRemove={onExtraDelete}
            addLabel="Добавить фото"
            items={images}
          />
        </>
      ) : (
        <>
          <MultyUploader
            onAdd={onUpload}
            onRemove={(id) => {
              onDelete(id);
            }}
            addLabel="Добавить фото"
            items={images}
          />
        </>
      )}
    </Wrapper>
  );
};
export default UploadSectionView;
