import React from 'react';
import { useHistory } from 'react-router-dom';
import { authOperations } from '../../../modules/auth';
import { connect } from 'react-redux';
//form
import RegisterForm from './RegisterFormComponent';
import { RegisterFormValidate } from './RegisterFormValidate';

const RegisterFormContainer = ({ routes, ...props }) => {
  const { push } = useHistory();

  const onError = (actions) => {
    return actions.setFieldError(
      'passwordAgain',
      'Email is taken. Please try another',
    );
  };

  const registerUser = async (body, actions) => {
    const { fullName, email, password } = body;

    try {
      await props.register({ fullName, email, password });

      push(routes.HOME);
    } catch (err) {
      onError(actions);
    }
  };

  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: '',
      showPassword: false,
    },
    validationSchema: RegisterFormValidate,
    onSubmit: registerUser,
  };

  return (
    <RegisterForm
      isLoading={props.isLoading}
      formikProps={formikProps}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.register.isLoading,
    error: state.auth.register.isError,
  };
};

const mapDispatchToProps = {
  register: authOperations.register,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterFormContainer);
