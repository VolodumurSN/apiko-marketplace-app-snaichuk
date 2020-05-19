import React from 'react';
import { useFormikContext } from 'formik';
import { Api } from '../../../services/Api';
import PhotosBar from './PhotosBarComponent';

const PhotosBarContainer = ({ values, isUpgradeBar, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleFileLoad = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await Api.uploadImages(formData);
    return res.data;
  };

  const handlePhoto = async (e) => {
    const newUrl = await handleFileLoad(e.target.files[0]);

    isUpgradeBar
      ? setFieldValue('photo', newUrl)
      : setFieldValue('photos', values.photos.concat(newUrl));
  };

  return (
    <PhotosBar {...{ values, handlePhoto, isUpgradeBar, ...props }} />
  );
};

export default PhotosBarContainer;
