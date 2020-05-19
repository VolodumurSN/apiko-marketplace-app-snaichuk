import React from 'react';
import s from './ButtonSell.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/BaseRoutes';

const ButtonSell = () => {
  return (
    <Link
      to={{
        pathname: routes.ADD_PRODUCT,
        state: { modal: true },
      }}
    >
      <button type="button" className={s.btnSell}>
        SELL
      </button>
    </Link>
  );
};

export default ButtonSell;
