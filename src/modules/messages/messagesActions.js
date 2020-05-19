import { createAsyncActions } from '@letapp/redux-actions';

export const sendMessageAction = createAsyncActions(
  'messages/SEND_MESSAGE',
);
export const fetchMessagesAction = createAsyncActions(
  'messages/FETCH_MESSAGES',
);
export const fetchMoreMessagesAction = createAsyncActions(
  'messages/FETCH_MORE_MESSAGES',
);
