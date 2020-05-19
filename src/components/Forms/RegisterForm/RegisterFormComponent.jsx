import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../Input';
import IconPassword from '../../Icons/IconPassword';
import Button from '../../Buttons/Button';
import s from './RegisterForm.module.scss';

const RegisterForm = ({ isLoading, formikProps }) => {
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

          <Input
            label="FULL NAME"
            name="fullName"
            type="text"
            placeholder="Tony Stark"
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

          <div className={s.passBar}>
            <Input
              label="PASSWORD AGAIN"
              name="passwordAgain"
              type={values.showPassword ? 'text' : 'password'}
            />

            <IconPassword
              setField={() =>
                setFieldValue('showPassword', !values.showPassword)
              }
            />
          </div>

          <Button
            label="Register"
            isLoading={isLoading}
            color="#349A89"
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
