import React from 'react';
import { Formik, Form } from 'formik';
import ProfileAvatar from '../../ProfileAvatar';
import Input from '../Input';
import Button from '../../Buttons/Button';
import PhotosBar from '../PhotosBar';
// import s from './ProfileForm.module.scss';

const ProfileForm = ({
  user,
  isLoading,
  isSaveSuccess,
  formikProps,
}) => {
  const { avatar } = user;

  return (
    <Formik {...formikProps}>
      {({ values }) => (
        <Form>
          <ProfileAvatar size="x4" user={user} photo={avatar} />

          <PhotosBar
            {...{ values }}
            label="Upgrade Photo"
            isUpgradeBar
          />

          <Input
            label="FULL NAME"
            name="fullName"
            type="text"
            placeholder={user.fullName}
          />

          <Input
            label="PHONE NUMBER"
            name="phone"
            type="text"
            placeholder={user.phone || '+380'}
          />

          <Button
            label="Save"
            isSuccess={isSaveSuccess}
            isLoading={isLoading}
            color="#349A89"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
