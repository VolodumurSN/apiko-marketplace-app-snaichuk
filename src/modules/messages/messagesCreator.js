import { v4 as uuidv4 } from 'uuid';

export const createMessage = ({ messageText, chatId, ownerId }) => ({
  id: uuidv4(),
  chatId,
  ownerId,
  text: messageText,
  read: false,
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  isNew: true,
});
