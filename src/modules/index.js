import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';
import chats from './chats';
import messages from './messages';
import entities from './entities';

const viewerPersistConfig = {
  key: 'viewer',
  storage,
  blacklist: ['fetchViewer'],
};

export default combineReducers({
  app,
  auth,
  viewer: persistReducer(viewerPersistConfig, viewer),
  products,
  chats,
  messages,
  entities,
});
