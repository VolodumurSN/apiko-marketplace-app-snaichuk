import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { generatePath, Link, useParams } from 'react-router-dom';
import s from './ChatDetails.module.scss';
import ProfileAvatar from '../../components/ProfileAvatar';
import ChatMessage from '../../components/ChatComponents/ChatMessage';
import { routes } from '../../routes/BaseRoutes';
import ChatProduct from '../../components/ChatComponents/ChatProduct';
import Spinner from '../../components/Spinners/Spinner';
import DotSpinner from '../../components/Spinners/DotSpinner';

const ChatDetails = ({
  currentChat,
  messages,
  fetchMoreMessages,
  isMessagesLoading,
  needMoreMessages,
  handleSend,
  messageText,
  setMessageText,
  member,
}) => {
  const { id } = useParams();
  const newMessageRef = useRef(null);
  const [isTopOfList, setIsTopOfList] = useState(false);
  const messageOnTop = messages[0]?.id;
  const lastMessage = messages[messages.length - 1];

  useEffect(() => {
    if (newMessageRef.current) {
      newMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lastMessage]);

  const onScrollList = (e) => {
    if (e.target.scrollTop === 0) {
      setIsTopOfList(true);
    }
  };

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });

  if (isMessagesLoading || !member || !currentChat) {
    return <Spinner />;
  }

  return (
    <>
      <div className={s.head}>
        <ProfileAvatar
          size="x2"
          user={member}
          photo={member.avatar}
        />

        <h5 className={s.memberName}>{member.fullName}</h5>

        <Link
          to={generatePath(routes.PRODUCT, {
            id: currentChat.product?.id,
          })}
        >
          <ChatProduct {...currentChat.product} isLink />
        </Link>

        <div className={s.menuWrap}>
          <div className={s.menuBtn} />
        </div>
      </div>

      <div onScroll={onScrollList} className={s.chatWindow}>
        <InfiniteScroll
          pageStart={0}
          loadMore={() =>
            fetchMoreMessages({
              chatId: id,
              offset: messageOnTop,
            })
          }
          hasMore={isTopOfList && needMoreMessages}
          loader={
            <li className={s.loader} key={0}>
              <DotSpinner color="#349a89" />
            </li>
          }
          threshold={10}
          useWindow={false}
          isReverse
        >
          <ul>
            {messages.map((message) => {
              const isSent = message.ownerId !== member.id;

              return (
                <ChatMessage
                  key={message.id}
                  {...{ isSent, ...message }}
                />
              );
            })}
            <li ref={newMessageRef} />
          </ul>
        </InfiniteScroll>
      </div>

      <form action="#" onSubmit={handleSend}>
        <input
          type="text"
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          id="chatInput"
          className={s.input}
          placeholder="Type your message here.."
        />
      </form>
    </>
  );
};

export default ChatDetails;
