import React from 'react';
import s from './DotSpinner.module.scss';

const DotSpinner = ({ color }) => {
  const style = { backgroundColor: color };

  return (
    <div className={s.spinner}>
      <div style={style} className={s.bounce1} />
      <div style={style} className={s.bounce2} />
      <div style={style} className={s.bounce2} />
    </div>
  );
};

export default DotSpinner;
