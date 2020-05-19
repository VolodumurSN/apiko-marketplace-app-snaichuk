import { normalize } from 'normalizr';
import { Api } from '../../services/Api';
import { createChatAction, fetchChatsAction } from './chatsActions';
import { Chat, ChatCollection } from '../schemas';

export function createChat(id, message) {
  return async function createChatThunk(dispatch) {
    try {
      dispatch(createChatAction.start());

      const res = await Api.createChat(id, message);

      const data = normalize(res.data, Chat);

      dispatch(createChatAction.success(data));
    } catch (err) {
      dispatch(
        createChatAction.error({
          message: err.message,
        }),
      );
    }
  };
}

export function fetchChats() {
  return async function fetchChatsThunk(dispatch) {
    try {
      dispatch(fetchChatsAction.start());

      const res = await Api.getChats();
      const data = normalize(res.data, ChatCollection);

      dispatch(fetchChatsAction.success(data));
    } catch (err) {
      dispatch(
        fetchChatsAction.error({
          message: err.message,
        }),
      );
    }
  };
}
