import React from 'react';
import { routes } from '../../../routes/BaseRoutes';
import s from './IconLogo.module.scss';

const IconLogo = ({ pathname }) => {
  let srcLogo = '/images/logo-white.png';

  if (pathname === routes.REGISTER) {
    srcLogo = '/images/logo-orange.png';
  }
  if (pathname === routes.LOGIN) {
    srcLogo = '/images/logo-green.png';
  }

  return <img src={srcLogo} className={s.logo} alt="logo" />;
};

export default IconLogo;
