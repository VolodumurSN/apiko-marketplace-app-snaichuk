import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span>Copyright &#9400; 2020. &nbsp;</span>

        <a href='/' className={s.link}>
          Privacy Policy.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
