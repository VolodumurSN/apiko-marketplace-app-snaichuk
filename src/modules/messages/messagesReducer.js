import { handleActions } from '@letapp/redux-actions';
import {
  sendMessageAction,
  fetchMessagesAction,
  fetchMoreMessagesAction,
} from './messagesActions';

const INITIAL_STATE = {
  sendMessage: {
    isLoading: false,
    isError: false,
  },
  fetchMessages: {
    isLoading: false,
    isError: false,
  },
  moreMessages: {
    isLoading: false,
    isError: false,
  },
  needMoreMessages: true,
  items: {
    // [chatId]: [],
  },
};

export default handleActions(
  {
    [sendMessageAction.start]: (
      state,
      { payload: { result, chatId } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: (state.items[chatId] || []).concat(result),
      },
      sendMessage: {
        ...state.sendMessage,
        isLoading: true,
        isError: false,
      },
    }),

    [sendMessageAction.success]: (
      state,
      { payload: { result, chatId, oldMessageId } },
    ) => {
      const items = state.items[chatId]
        .filter((i) => i !== `${oldMessageId}-${chatId}`)
        .concat(result);
      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: items,
        },
        sendMessage: {
          ...state.sendMessage,
          isLoading: false,
        },
      };
    },

    [sendMessageAction.error]: (state) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchMessagesAction.start]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchMessagesAction.success]: (
      state,
      { payload: { result, chatId } },
    ) => {
      const needMore = result.length > 9;
      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: result.reverse(),
        },
        fetchMessages: {
          ...state.fetchMessages,
          isLoading: false,
        },
        needMoreMessages: needMore,
      };
    },

    [fetchMessagesAction.error]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchMoreMessagesAction.start]: (state) => ({
      ...state,
      moreMessages: {
        ...state.moreMessages,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchMoreMessagesAction.success]: (
      state,
      { payload: { result, chatId } },
    ) => {
      const items = [...result.reverse(), ...state.items[chatId]];
      const noMore = result.length !== 0;
      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: items,
        },
        moreMessages: {
          ...state.moreMessages,
          isLoading: false,
        },
        needMoreMessages: noMore,
      };
    },

    [fetchMoreMessagesAction.error]: (state) => ({
      ...state,
      moreMessages: {
        ...state.moreMessages,
        isLoading: false,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
