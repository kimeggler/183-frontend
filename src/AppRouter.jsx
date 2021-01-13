import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './App.css';

import { validateToken } from './helpers/authenticationhelper';
import { getData } from './services/fetchservice';
import Login from './containers/login/Login';

export const UserContext = createContext();

const AppRouter = ({ isLoading }) => {
  // const [profile, setProfile] = useState();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     setProfile(await getData('me'));
  //   };
  //   fetchUser();
  // }, []);

  if (isLoading) {
    // || !profile
    return null;
  }

  if (!validateToken()) {
    return <Login />;
  }

  return (
    // <UserContext.Provider value={{ profile }}>
    <div className='router-section' id='router-element'>
      <Route exact path='/home' component={null} />
    </div>
    // </UserContext.Provider>
  );
};

AppRouter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

AppRouter.defaultProps = {
  isLoading: false,
};

export default AppRouter;
