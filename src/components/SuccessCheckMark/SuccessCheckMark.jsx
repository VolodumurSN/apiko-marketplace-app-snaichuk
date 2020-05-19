import React from 'react';
import s from './SuccessCheckMark.module.scss';

const SuccessCheckMark = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
      className={s.checkMark}
    >
      <polyline
        className={`${s.path} ${s.check}`}
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
  );
};

export default SuccessCheckMark;
