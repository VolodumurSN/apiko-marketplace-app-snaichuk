import React from 'react';
import s from './ChatItem.module.scss';
import { useLocation } from 'react-router-dom';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
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

  dayjs.extend(relativeTime);
  const timeAgo = dayjs(
    dayjs(new Date(lastMessage?.createdAt || message.createdAt)),
  ).fromNow();

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

      <div className={s.time}>{timeAgo}</div>
    </Link>
  );
};

export default ChatItem;
