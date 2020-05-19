import React from 'react';
import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <div className={s.cube1} />
      <div className={s.cube2} />
    </div>
  );
};

export default Spinner;
