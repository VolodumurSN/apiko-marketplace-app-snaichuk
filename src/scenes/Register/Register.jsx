import React from 'react';
import s from './Register.module.scss';
import RegisterForm from '../../components/Forms/RegisterForm';
import { Link } from 'react-router-dom';

const Register = (props) => {
  return (
    <>
      <div className={s.formBox}>
        <h2 className={s.title}>Register</h2>

        <RegisterForm {...props} />
      </div>

      <div className={s.linkBox}>
        <p className={s.linkBox__text}>I already have an account,</p>

        <Link to={props.routes.LOGIN} className={s.linkBox__link}>
          {` LOG IN`}
        </Link>
      </div>
    </>
  );
};

export default Register;
