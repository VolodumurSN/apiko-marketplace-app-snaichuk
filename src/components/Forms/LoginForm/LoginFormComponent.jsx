import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Input from '../Input';
import IconPassword from '../../Icons/IconPassword';
import Button from '../../Buttons/Button';
import s from './LoginForm.module.scss';

const LoginForm = ({ isLoading, formikProps, routes }) => {
  return (
    <Formik {...formikProps}>
      {({ values, setFieldValue }) => (
        <Form>
          <Input
            label="EMAIL"
            name="email"
            type="email"
            placeholder="Example@gmail.com"
          />

          <div className={s.passBar}>
            <Input
              label="PASSWORD"
              name="password"
              type={values.showPassword ? 'text' : 'password'}
            />

            <IconPassword
              setField={() =>
                setFieldValue('showPassword', !values.showPassword)
              }
            />
          </div>

          <Link to={routes.HOME} className={s.passRememberLink}>
            Don't remember password?
          </Link>

          <Button
            label="Continue"
            isLoading={isLoading}
            color="#349A89"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
