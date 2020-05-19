import React from 'react';
import s from './Profile.module.scss';
import ProfileForm from '../../components/Forms/ProfileForm';

const Profile = (props) => {
  return (
    <>
      <div className={s.formBox}>
        <h2 className={s.title}>Edit Profile</h2>

        <ProfileForm {...props} />
      </div>
    </>
  );
};

export default Profile;
