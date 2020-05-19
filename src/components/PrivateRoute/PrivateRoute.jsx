import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, user, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        return !user ? <Redirect to={routes.REGISTER} /> : children;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.viewer.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
