import { createSelector } from 'reselect';

export const getChatsEntities = (state) => state.entities.chats;

const getChatsIds = (state) => state.chats.items;
const getMessagesEntities = (state) => state.entities.messages;

export const getChats = createSelector(
  [getChatsEntities, getChatsIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getChatsWithLastMessage = createSelector(
  [getChats, getMessagesEntities],
  (chats, messages) =>
    chats.map((chat) => ({
      ...chat,
      lastMessage: messages[chat.lastMessage],
    })),
);

export const getChat = createSelector(
  (state, id) => getChatsEntities(state)[id],
  (item) => item,
);
