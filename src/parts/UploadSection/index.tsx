import React, {useEffect} from "react";
import UploadSectionView from "./view";
import { IUploadSection } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { imagesSelector, isLoading } from "./duck/selectors";
import { addImage, deleteExtraImage } from "./duck/actions";
import { useParams } from "react-router-dom";
import { deleteImage } from "./duck/slice";
import {useField} from "formik";

function UploadSection(props: IUploadSection) {
  const dispatch = useDispatch();
  const initImages = props.loadedImages || []
  const images = useSelector(imagesSelector);
  const loading = useSelector(isLoading);
  const { id }: { id: string } = useParams();
  const [field, meta, helpers]  = useField(props.name || 'uploadIds')

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
  useEffect(() => {
    helpers.setValue(images.map(item => item.id))
  },[images])
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
          images={[...images, ...initImages]}
          id={id}
        />
      )}
    </div>
  );
}
export default UploadSection;
