import React, { useEffect } from 'react';
import Chat from './ChatComponent';
import { chatsOperations, chatsSelectors } from '../../modules/chats';
import { connect } from 'react-redux';

const ChatContainer = (props) => {
  useEffect(() => {
    props.fetchChats();
  }, []);

  return <Chat {...props} />;
};

const mapStateToProps = (state) => {
  return {
    chatsArr: chatsSelectors.getChatsWithLastMessage(state),
    isLoading: state.chats.fetchChats.isLoading,
  };
};

const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatContainer);
