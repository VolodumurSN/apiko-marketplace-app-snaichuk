import { normalize } from 'normalizr';
import { Api } from '../../services/Api';
import { Message, MessageCollection } from '../schemas';
import {
  sendMessageAction,
  fetchMessagesAction,
  fetchMoreMessagesAction,
} from './messagesActions';
import { viewerSelectors } from '../viewer';
import { createMessage } from './messagesCreator';

export function sendMessage({ chatId, messageText }) {
  return async function sendMessageThunk(dispatch, getState) {
    const user = viewerSelectors.getViewer(getState());
    const message = createMessage({
      messageText,
      chatId,
      ownerId: user.id,
    });

    try {
      dispatch(
        sendMessageAction.start({
          chatId,
          ...normalize(message, Message),
        }),
      );

      const res = await Api.sendMessage(chatId, messageText);
      const { result, entities } = normalize(res.data, Message);

      dispatch(
        sendMessageAction.success({
          oldMessageId: message.id,
          result,
          entities,
          chatId,
        }),
      );
    } catch (err) {
      dispatch(
        sendMessageAction.error({
          message: err.message,
        }),
      );
      throw err;
    }
  };
}

export function fetchMessages({ chatId }) {
  return async function fetchMessagesThunk(dispatch) {
    try {
      dispatch(fetchMessagesAction.start());

      const res = await Api.getMessages(chatId);

      const { result, entities } = normalize(
        res.data,
        MessageCollection,
      );

      dispatch(
        fetchMessagesAction.success({ result, entities, chatId }),
      );
    } catch (err) {
      dispatch(
        fetchMessagesAction.error({
          message: err.message,
        }),
      );
      throw err;
    }
  };
}

export function fetchMoreMessages({ chatId, offset }) {
  return async function fetchMoreMessagesThunk(dispatch) {
    try {
      dispatch(fetchMoreMessagesAction.start());

      const res = await Api.getMoreMessages(chatId, offset);

      const { result, entities } = normalize(
        res.data,
        MessageCollection,
      );

      dispatch(
        fetchMoreMessagesAction.success({ result, entities, chatId }),
      );
    } catch (err) {
      dispatch(
        fetchMoreMessagesAction.error({
          message: err.message,
        }),
      );
      throw err;
    }
  };
}

export function handleMessageRealTime(e) {
  return async function handleMessageRealTimeThunk(dispatch) {
    if (e.type === 'ADD') {
      dispatch(addMessage(e.message));
    }
  };
}

export function addMessage(message) {
  return async function addMessageThunk(dispatch) {
    dispatch(
      sendMessageAction.start({
        chatId: message.chatId,
        ...normalize(message, Message),
      }),
    );
  };
}
