import React from 'react';
import s from './ChatItem.module.scss';
import { useLocation } from 'react-router-dom';
import { DateTime } from 'luxon';
import { routes } from '../../../routes/BaseRoutes';
import { generatePath, Link } from 'react-router-dom';
import ChatProduct from '../ChatProduct';

const ChatItem = ({
  id,
  product,
  message,
  lastMessage,
  participants,
}) => {
  const { pathname } = useLocation();
  const param = +pathname.split('/')[2];

  let classItem = s.item;
  if (id === param) {
    classItem += ` ${s.active}`;
  }

  const date = DateTime.fromISO(
    lastMessage?.createdAt || message.createdAt,
  );
  const hours = date.toLocaleString(DateTime.TIME_SIMPLE);

  return (
    <Link
      className={classItem}
      to={generatePath(routes.CHAT, { id })}
    >
      <div className={s.itemInfo}>
        <p>{participants[0].fullName}</p>
        <p className={s.message}>
          {lastMessage?.text || message.text}
        </p>
      </div>

      <ChatProduct {...product} />

      <div className={s.time}>{hours}</div>
    </Link>
  );
};

export default ChatItem;
