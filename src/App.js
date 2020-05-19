import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { appOperations } from './modules/app';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/BaseRoutes';
import Spinner from './components/Spinners/Spinner';

const App = (props) => {
  useEffect(() => {
    props.dispatch(appOperations.init());
  }, []);

  if (props.isLoading) {
    return <Spinner />;
  }

  return (
    <Router>
      <BaseRoutes />
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
  };
};

export default connect(mapStateToProps)(App);
