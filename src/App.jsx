import React from 'react';

import './App.css';
import AppRouter from './AppRouter';
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom';
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import Home from './containers/home/Home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={AppRouter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default withRouter(App);
