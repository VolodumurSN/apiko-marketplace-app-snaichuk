import React from 'react';
import s from './Button.module.scss';
import DotSpinner from '../../Spinners/DotSpinner';
import SuccessCheckMark from '../../SuccessCheckMark';

const Button = ({
  children,
  label,
  color,
  border,
  width,
  isLoading,
  isSuccess,
  ...props
}) => {
  const insideButton = () => {
    if (isLoading) {
      return <DotSpinner color="#FFF" />;
    }
    if (isSuccess) {
      return <SuccessCheckMark />;
    }

    return label || children;
  };

  return (
    <button
      {...props}
      style={{
        backgroundColor: color,
        border: border,
        maxWidth: `${width}px`,
      }}
      className={s.btnPrimary}
      type="submit"
    >
      {insideButton()}
    </button>
  );
};

export default Button;
