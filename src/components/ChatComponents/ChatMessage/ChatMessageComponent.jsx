import React from 'react';
import s from './ChatMessage.module.scss';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

const ChatMessage = ({ isSent, text, createdAt }) => {
  dayjs.extend(relativeTime);
  const timeAgo = dayjs(dayjs(new Date(createdAt))).fromNow();

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
