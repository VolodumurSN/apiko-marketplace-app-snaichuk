import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import PrivateRoute from '../components/PrivateRoute';
import Modal from '../components/Modals/Modal';
//layouts
import MainLayout from '../layouts/MainLayout';
import FormLayout from '../layouts/FormLayout';
import ChatLayout from '../layouts/ChatLayout';
//scenes
import Home from '../scenes/Home/Home';
import Profile from '../scenes/Profile';
import AddProduct from '../scenes/AddProduct';
import User from '../scenes/User';
import Chat from '../scenes/Chat';

export const routes = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  PROFILE: '/profile',
  BOOKMARKS: '/bookmarks',
  ADD_PRODUCT: '/products/add',
  USER: '/user/:id',
  PRODUCT: '/product/:id',
  INBOX: '/inbox',
  CHAT: '/inbox/:id',
};

const BaseRoutes = () => {
  return (
    <Switch>
      <Route path={['/', '/bookmarks', '/product/:id']} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>

      <PrivateRoute path={routes.PROFILE}>
        <FormLayout>
          <Profile />
        </FormLayout>
      </PrivateRoute>

      <Route path={routes.USER}>
        <MainLayout>
          <User />
        </MainLayout>
      </Route>

      <PrivateRoute path={routes.INBOX}>
        <ChatLayout>
          <Chat />
        </ChatLayout>
      </PrivateRoute>

      <PrivateRoute path={routes.ADD_PRODUCT}>
        <MainLayout>
          <Modal>
            <AddProduct />
          </Modal>
        </MainLayout>
      </PrivateRoute>

      <Auth {...{ routes }} />
    </Switch>
  );
};

export default BaseRoutes;
