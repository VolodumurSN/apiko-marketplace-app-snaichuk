import { createSelector } from 'reselect';

const getMessagesEntities = (state) => state.entities.messages;

const getIds = (state, chatId) => state.messages.items[chatId] || [];

export const getMessages = createSelector(
  [getMessagesEntities, getIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
