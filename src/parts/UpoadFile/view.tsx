import React, {useState} from "react";
import useId from "react-id-generator";

import {Wrapper, Preview, Label, CloseButton} from "./styled";

import {IUpoadFile} from "./index";
import {TUploadedImage} from "../../pages/EventsAdd/types";

function UpoadFileView({label, file, onAdd, onRemove, imageUrl, setUploadedImages, uploadedImages}: IUpoadFile) {
  const [src, setSrc] = useState(null);
  const imageId = useId("image");
  const [currentImageId, seCurrentImageId] = useState<string>();

  const addImageIntoUploadedImages = (url:any) => {
    if(setUploadedImages){
      setUploadedImages([...uploadedImages, {id:imageId, url: url}])
      seCurrentImageId(imageId);
    }
  }

  const removeImageFromUploadedImages = () => {
    if(setUploadedImages){
      setUploadedImages(uploadedImages.filter((item: TUploadedImage) => item.id !== currentImageId))
    }
  }

  return (
    <Wrapper>
      <Preview file={file} image={imageUrl || src}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              addImageIntoUploadedImages(URL.createObjectURL(e.target.files[0]));
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
            removeImageFromUploadedImages();
          }}
        />
      )}
    </Wrapper>
  );
}

export default UpoadFileView;
