import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ButtonSell from '../../components/Buttons/ButtonSell';
import IconInbox from '../../components/InboxNavLink';
import s from './MainLayout.module.scss';
import Search from '../../components/Forms/SearchForm';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header>
        <IconInbox />
        <ButtonSell />
        <Search />
      </Header>

      <div className={s.container}>{children}</div>

      <Footer />
    </>
  );
};

export default MainLayout;
