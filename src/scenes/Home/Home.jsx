import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import s from './Home.module.scss';
import Latest from '../Latest';
import Bookmarks from '../Bookmarks';
import Product from '../Product';

const Home = () => {
  return (
    <div className={s.container}>
      <Switch>
        <Route path={routes.HOME} exact>
          <Latest />
        </Route>

        <Route path={routes.BOOKMARKS} exact>
          <Bookmarks />
        </Route>

        <Route path={routes.PRODUCT} exact>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
