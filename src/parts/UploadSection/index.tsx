import React from "react";
import UploadSectionView from "./view";
import { IUploadSection } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { imagesSelector, isLoading } from "./duck/selectors";
import { addImage } from "./duck/actions";
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
  const removeImage = (uploadId) => {
    dispatch(deleteImage(uploadId));
  };
  return (
    <div>
      {loading ? (
        "...Загружаю"
      ) : (
        <UploadSectionView
          onUpload={uploadImage}
          images={images}
          id={id}
          onDelete={removeImage}
        />
      )}
    </div>
  );
}
export default UploadSection;
