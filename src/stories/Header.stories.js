import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import s from '../components/Header/Header.module.scss';

storiesOf("Header", module)
  .add("Header", () => <Header />);

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a onClick={action('to Home page')}>
          <img src="/images/logo-green.png" alt="logo" />
        </a>

        <div className={s.center}>
          <a onClick={action('to Sell page')} className={s.link}>
            Sell
          </a>
        </div>

        <div className={s.right}>
          <a onClick={action('to Login page')} className={s.authLink}>
            LOGIN
          </a>

          <img
            src="/images/icons/heart.svg"
            width="20"
            height="18"
            alt="bookmark"
          />
        </div>

      </div>
    </header>
  )
};
