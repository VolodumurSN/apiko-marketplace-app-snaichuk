import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { chatsSelectors } from '../../modules/chats';
import {
  messagesOperations,
  messagesSelectors,
} from '../../modules/messages';
import ChatDetails from './ChatDetailsComponent';

const ChatDetailsContainer = (props) => {
  const { id } = useParams();
  const { fetchMessages, sendMessage, currentChat } = props;
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    fetchMessages({ chatId: id });
  }, [id]);

  const member = currentChat?.participants[0];

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage({ chatId: id, messageText });
    setMessageText('');
  };

  return (
    <ChatDetails
      {...{
        currentChat,
        member,
        messageText,
        setMessageText,
        handleSend,
        ...props,
      }}
    />
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    currentChat: chatsSelectors.getChat(state, match.params.id),
    messages: messagesSelectors.getMessages(state, match.params.id),
    needMoreMessages: state.messages.needMoreMessages,
    isMessagesLoading: state.messages.fetchMessages.isLoading,
    isSentLoading: state.messages.sendMessage.isLoading,
  };
};

const mapDispatchToProps = {
  sendMessage: messagesOperations.sendMessage,
  fetchMessages: messagesOperations.fetchMessages,
  fetchMoreMessages: messagesOperations.fetchMoreMessages,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChatDetailsContainer),
);
