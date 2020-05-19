import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import s from '../components/RegisterForm/RegisterForm.module.scss';
import { IconPassword } from '../components/IconPassword/IconPassword';

storiesOf("RegisterForm", module)
  .add("Register Form", () => <RegisterForm />);

const RegisterForm = () => {
  return (
    <form className={s.form}>

      <label className={s.label}> EMAIL
        <input
          name="email" type="email"
          onChange={action('typing Email')}
          className={s.input}
          placeholder="Example@gmail.com"
        />
      </label>

      <label className={s.label}> FULL NAME
        <input
          name="fullName" type="text"
          onChange={action('typing Full Name')}
          className={s.input}
          placeholder="Tony Stark"
        />
      </label>

      <div className={s.container}>
        <label className={s.label}> PASSWORD
          <input
            name="password" type="password"
            onChange={action('typing Password')}
            className={s.input}
          />
        </label>

        <div onClick={action('Show Password')}>
          <IconPassword />
        </div>
      </div>

      <div className={s.container}>
        <label className={s.label}> PASSWORD AGAIN
          <input
            name="passwordAgain" type="password"
            onChange={action('typing Password Again')}
            className={s.input}
          />
        </label>

        <div onClick={action('Show Password')}>
          <IconPassword />
        </div>
      </div>

      <div className={s.btnWrap}>
        <button className={s.btnPrimary}
                onSubmit={action('to Home page')}
        >
          Register
        </button>
      </div>
    </form>
  )
};
