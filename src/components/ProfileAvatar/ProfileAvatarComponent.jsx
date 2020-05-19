import React from 'react';
import s from './ProfileAvatar.module.scss';

export const ProfileAvatar = ({ size, username, photo, border }) => {
  let classAvatar = `${s.avatar}`;

  if (size === 'x2') {
    classAvatar += ` ${s.x2}`;
  }
  if (size === 'x3') {
    classAvatar += ` ${s.x3}`;
  }
  if (size === 'x4') {
    classAvatar += ` ${s.x4}`;
  }
  if (border) {
    classAvatar += ` ${s.border}`;
  }

  return (
    <div className={classAvatar}>
      {!photo ? (
        <span>{username}</span>
      ) : (
        <img src={photo} className={s.photo} alt="avatar" />
      )}
    </div>
  );
};

export default ProfileAvatar;
