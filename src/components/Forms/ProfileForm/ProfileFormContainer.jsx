import React, { useState } from 'react';
import { viewerOperations } from '../../../modules/viewer';
import { connect } from 'react-redux';
//form
import ProfileForm from './ProfileFormComponent';
import { ProfileFormValidate } from './ProfileFormValidate';

const ProfileFormContainer = ({ routes, user, ...props }) => {
  const [isSaveSuccess, setIsSaveSuccess] = useState(false);

  const onError = (actions) => {
    return actions.setFieldError(
      'phone',
      'Something went wrong. Please try again',
    );
  };

  const saveChanges = async (body, actions) => {
    const { fullName, phone, photo } = body;

    try {
      await props.editViewer({
        fullName,
        phone: phone || user.phone,
        avatar: photo || user.avatar,
        location: null,
      });

      setIsSaveSuccess(true);
    } catch (err) {
      onError(actions);
    }
  };

  const formikProps = {
    initialValues: {
      fullName: '',
      phone: '',
      avatar: '',
      location: '',
    },
    validationSchema: ProfileFormValidate,
    onSubmit: saveChanges,
  };

  return (
    <ProfileForm
      {...{ formikProps, routes, user, isSaveSuccess, ...props }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.viewer.editViewer.isLoading,
    user: state.viewer.user,
  };
};

const mapDispatchToProps = {
  editViewer: viewerOperations.editViewer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileFormContainer);
