import React from "react";
import UploadSectionView from "./view";
import { IUploadSection } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { imagesSelector, isLoading } from "./duck/selectors";
import { addImage, deleteExtraImage } from "./duck/actions";
import { useParams } from "react-router-dom";
import { deleteImage } from "./duck/slice";

function UploadSection(props: IUploadSection) {
  const dispatch = useDispatch();
  const images = useSelector(imagesSelector);
  const loading = useSelector(isLoading);
  const { id }: { id: string } = useParams();

  const uploadImage = (file) => {
    dispatch(addImage({ file, method: props.onUpload }));
  };
  const uploadExtraImage = (file) => {
    dispatch(
      addImage({ file, method: (file) => props.onExtraUpload(file, id) })
    );
  };
  const removeImage = (uploadId) => {
    dispatch(deleteImage(uploadId));
  };
  const removeExtraImage = (uploadId) => {
    dispatch(
      deleteExtraImage({
        method: props.onExtraDelete,
        id,
        uploadId,
      })
    );
  };
  return (
    <div>
      {loading ? (
        "...Загружаю"
      ) : (
        <UploadSectionView
          onUpload={uploadImage}
          onExtraUpload={uploadExtraImage}
          onDelete={removeImage}
          onExtraDelete={removeExtraImage}
          images={[...images, ...props.loadedImages]}
          id={id}
        />
      )}
    </div>
  );
}
export default UploadSection;
