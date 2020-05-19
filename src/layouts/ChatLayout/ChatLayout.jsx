import React from 'react';
import Header from '../../components/Header';
import ButtonSell from '../../components/Buttons/ButtonSell';
//import s from './ChatLayout.module.scss';

const ChatLayout = ({ children }) => {
  return (
    <>
      <Header>
        <ButtonSell />
      </Header>

      {children}
    </>
  );
};

export default ChatLayout;
