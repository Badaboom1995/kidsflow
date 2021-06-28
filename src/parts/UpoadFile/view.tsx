import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import useId from "react-id-generator";

import {Wrapper, Preview, Label, CloseButton} from "./styled";

import {IUpoadFile} from "./index";
import organizationsService from "services/organizations";
import {TUploadedImage} from "../../pages/EventsAdd/types";

function UpoadFileView({label, file, onSuccess, setUploadedImages, uploadedImages}: IUpoadFile) {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);
  const [imageFile, setFile] = useState(null);
  const imageId = useId("image");
  const [currentImageId, seCurrentImageId] = useState<string>();

  useEffect(() => {
    if (src) {
      organizationsService.uploadImage(imageFile, onSuccess);
    }
  }, [src]);

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
      <Preview file={file} image={src}>
        <Label>
          {label}
          <input
            type="file"
            onChange={(e) => {
              // console.log(e.target.files);
              addImageIntoUploadedImages(URL.createObjectURL(e.target.files[0]));
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
            removeImageFromUploadedImages();
          }}
        />
      )}
    </Wrapper>
  );
}

export default UpoadFileView;
