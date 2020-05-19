import React, { useState } from 'react';
import Header from './HeaderComponent';
import { useHistory } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import { viewerOperations } from '../../modules/viewer';
import { connect } from 'react-redux';

const HeaderContainer = (props) => {
  const { push } = useHistory();
  const [isPopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleLogout = () => {
    props.logout();
    push(routes.HOME);
  };

  return (
    <Header
      {...props}
      isPopup={isPopup}
      handlePopup={handlePopup}
      handleLogout={handleLogout}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.viewer.user,
    isLoading: state.viewer.fetchViewer.isLoading,
  };
};

const mapDispatchToProps = {
  logout: viewerOperations.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
