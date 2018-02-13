import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage.js';
import FormPage from './containers/FormPage';
import TodayPage from './containers/TodayPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={TodayPage}/>
      <Route path="form" component={FormPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
