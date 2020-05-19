import React from 'react';
import { useHistory } from 'react-router-dom';
import { authOperations } from '../../../modules/auth';
import { connect } from 'react-redux';
//form
import LoginForm from './LoginFormComponent';
import { LoginFormValidate } from './LoginFormValidate';

const LoginFormContainer = ({ routes, isLoading, ...props }) => {
  const { push } = useHistory();

  const onError = (actions) => {
    return actions.setFieldError(
      'password',
      'Incorrect email or password',
    );
  };

  const loadUser = async (body, actions) => {
    const { email, password } = body;

    try {
      await props.login({ email, password });

      push(routes.HOME);
    } catch (err) {
      onError(actions);
    }
  };

  const formikProps = {
    initialValues: {
      email: '',
      password: '',
      showPassword: false,
    },
    validationSchema: LoginFormValidate,
    onSubmit: loadUser,
  };

  return <LoginForm {...{ isLoading, formikProps, routes }} />;
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.login.isLoading,
    error: state.auth.login.isError,
  };
};

const mapDispatchToProps = {
  login: authOperations.login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
