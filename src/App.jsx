import React from 'react';

import './App.css';
import AppRouter from './AppRouter';
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom';
import Login from './containers/login/Login';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route component={AppRouter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default withRouter(App);
