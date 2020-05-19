import React from 'react';
import s from './PhotosBar.module.scss';

const PhotosBar = ({ values, isUpgradeBar, handlePhoto, label }) => {
  if (isUpgradeBar) {
    return (
      <label className={s.upgradeBtn}>
        {label}
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handlePhoto}
          className={s.upgradeInput}
        />
      </label>
    );
  }

  return (
    <div className={s.uploadBar}>
      <label className={s.uploadBtn}>
        <input
          type="file"
          name="photos"
          accept="image/*"
          onChange={handlePhoto}
          multiple
          className={s.uploadInput}
        />
      </label>

      {values.photos.map((photo) => (
        <img src={photo} key={photo} className={s.photo} />
      ))}
    </div>
  );
};

export default PhotosBar;
