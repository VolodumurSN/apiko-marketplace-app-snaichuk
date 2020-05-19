import { createAsyncActions } from '@letapp/redux-actions';

export const createChatAction = createAsyncActions(
  'chats/CREATE_CHAT',
);
export const fetchChatsAction = createAsyncActions(
  'chats/FETCH_CHATS',
);
