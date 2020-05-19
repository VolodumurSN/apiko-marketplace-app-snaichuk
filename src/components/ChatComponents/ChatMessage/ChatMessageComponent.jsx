import React from 'react';
import s from './ChatMessage.module.scss';
import { DateTime } from 'luxon';

const ChatMessage = ({ isSent, text, createdAt }) => {
  const timeAgo = DateTime.fromISO(createdAt).toRelative();

  if (isSent) {
    return (
      <li className={s.messageContainer}>
        <div className={s.sentWrap}>
          <p className={s.sentMessage}>{text}</p>
        </div>
        <span className={s.sentTime}>{timeAgo}</span>
      </li>
    );
  }
  return (
    <li className={`${s.messageContainer} ${s.received}`}>
      <div className={s.receivedWrap}>
        <p className={s.receivedMessage}>{text}</p>
      </div>
      <span className={s.receiveTime}>{timeAgo}</span>
    </li>
  );
};

export default ChatMessage;
