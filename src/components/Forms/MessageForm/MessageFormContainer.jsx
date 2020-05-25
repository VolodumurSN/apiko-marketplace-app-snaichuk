import React from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../../routes/BaseRoutes';
import { chatsOperations } from '../../../modules/chats';
import MessageForm from './MessageFormComponent';

const MessageFormContainer = ({ productId, owner, ...props }) => {
  const { push } = useHistory();
  const { createChat, isLoading, chatId } = props;

  const handleMessage = async ({ message }) => {
    try {
      await createChat(productId, message);

      if (!isLoading) {
        push(routes.INBOX);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formikProps = {
    validationSchema: Yup.object().shape({
      message: Yup.string()
        .min(10, 'Description must be longer than 10 characters')
        .required('Required'),
    }),
    initialValues: {
      message: '',
    },
    onSubmit: handleMessage,
  };

  return <MessageForm {...{ formikProps, ...props }} />;
};

const mapStateToProps = (state) => {
  return {
    chatId: state.chats.createChat.chatId,
    isLoading: state.chats.createChat.isLoading,
  };
};

const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageFormContainer);
