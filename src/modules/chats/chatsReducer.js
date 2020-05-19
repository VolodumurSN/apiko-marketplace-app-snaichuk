import { handleActions } from '@letapp/redux-actions';
import { createChatAction, fetchChatsAction } from './chatsActions';

const INITIAL_STATE = {
  createChat: {
    isLoading: false,
    isError: false,
    chatId: null,
  },
  fetchChats: {
    isLoading: false,
    isError: false,
  },
  items: [],
};

export default handleActions(
  {
    [createChatAction.start]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
        isError: false,
      },
    }),

    [createChatAction.success]: (state, { payload }) => ({
      ...state,
      items: [payload.result].concat(state.items),
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: false,
        chatId: payload.result,
      },
    }),

    [createChatAction.error]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchChatsAction.start]: (state) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchChatsAction.success]: (state, { payload }) => ({
      ...state,
      items: payload.result,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
        isError: false,
      },
    }),

    [fetchChatsAction.error]: (state) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
