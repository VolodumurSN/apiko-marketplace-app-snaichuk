import React from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from '../components/AuthRoute';
//layout
import FormLayout from '../layouts/FormLayout';
//scenes
import Login from '../scenes/Login/Login';
import Register from '../scenes/Register/Register';

const Auth = (props) => {
  const { routes } = props;

  return (
    <Switch>
      <AuthRoute path={routes.LOGIN}>
        <FormLayout>
          <Login {...props} />
        </FormLayout>
      </AuthRoute>

      <AuthRoute path={routes.REGISTER}>
        <FormLayout>
          <Register {...props} />
        </FormLayout>
      </AuthRoute>
    </Switch>
  );
};

export default Auth;
