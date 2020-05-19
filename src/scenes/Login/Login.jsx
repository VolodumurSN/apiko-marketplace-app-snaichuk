import React from 'react';
import s from './Login.module.scss';
import LoginForm from '../../components/Forms/LoginForm';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <>
      <div className={s.formBox}>
        <h2 className={s.title}>Login</h2>

        <LoginForm {...props} />
      </div>

      <div className={s.linkBox}>
        <p className={s.linkBox__text}>I have no account,</p>

        <Link to={props.routes.REGISTER} className={s.linkBox__link}>
          {` REGISTER NOW`}
        </Link>
      </div>
    </>
  );
};

export default Login;
