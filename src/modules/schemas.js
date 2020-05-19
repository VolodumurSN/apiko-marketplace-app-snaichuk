import { schema } from 'normalizr';

export const Message = new schema.Entity('messages', undefined, {
  idAttribute: (entity) => `${entity.id}-${entity.chatId}`,
});

export const MessageCollection = [Message];

const Chats = new schema.Entity('chats', {
  lastMessage: Message,
});

export const Chat = new schema.Entity('chats');

export const ChatCollection = [Chats];
