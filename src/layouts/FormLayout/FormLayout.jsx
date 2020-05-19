import React from 'react';
import s from './FormLayout.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ButtonSell from '../../components/Buttons/ButtonSell';

const FormLayout = ({ children }) => {
  return (
    <>
      <Header>
        <ButtonSell />
      </Header>

      <div className={s.formWrapper}>{children}</div>

      <Footer />
    </>
  );
};

export default FormLayout;
