import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import s from '../components/LoginForm/LoginForm.module.scss';
import { IconPassword } from '../components/IconPassword/IconPassword';

storiesOf("LoginForm", module)
  .add("Login Form", () => <LoginForm />);

const LoginForm = () => {
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

      <div className={s.container}>
        <label className={s.label}> PASSWORD
          <input
            name="password" type="password"
            onChange={action('typing Password')}
            className={s.input}
            placeholder="Example@gmail.com"
          />
        </label>

        <div onClick={action('Show Password')}>
          <IconPassword />
        </div>
      </div>

      <div className={s.btnWrap}>
        <a onClick={action('to Remember password page')}
           className={s.passRememberLink}
        >

          Don't remember password?
        </a>

        <button className={s.btnPrimary}
                onSubmit={action('to Home page')}
        >
          Continue
        </button>
      </div>
    </form>
  )
};
