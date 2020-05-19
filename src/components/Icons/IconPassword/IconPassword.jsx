import React from 'react';
import s from './IconPassword.module.scss';

const IconPassword = ({ setField }) => {
  return (
    <img
      onClick={() => setField()}
      src="/images/icons/eye.svg"
      className={s.iconPassword}
      alt="eye"
    />
  );
};

export default IconPassword;
