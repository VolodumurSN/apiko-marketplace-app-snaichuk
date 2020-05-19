import React from 'react';
import ProfileAvatar from './ProfileAvatarComponent';

export const ProfileAvatarContainer = ({ user, ...props }) => {
  let username = '';

  if (user?.fullName) {
    const nameArr = user.fullName.split(' ');

    username = nameArr.map((i) => i[0]).join('');
  }

  return <ProfileAvatar {...{ username, ...props }} />;
};

export default ProfileAvatarContainer;
