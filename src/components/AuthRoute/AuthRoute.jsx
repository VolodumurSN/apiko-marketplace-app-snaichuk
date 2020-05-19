import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import { connect } from 'react-redux';

const AuthRoute = ({ children, user, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        return user ? <Redirect to={routes.HOME} /> : children;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.viewer.user,
  };
};

export default connect(mapStateToProps)(AuthRoute);
