import React from 'react';
import { useField } from 'formik';
import s from './Input.module.scss';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <label className={s.label}>
      {label}

      {props.type === 'textarea' ? (
        <textarea className={s.textarea} {...field} {...props} />
      ) : (
        <input className={s.input} {...field} {...props} />
      )}

      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </label>
  );
};

export default Input;
