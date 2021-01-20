import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { clearToken } from '../../helpers/authenticationhelper';
import style from './home.module.css';
import { UserContext } from '../../AppRouter';

function Home() {
  const history = useHistory();

  const { profile } = useContext(UserContext);

  const logout = () => {
    clearToken();
    history.push('/login');
  };

  const setVisibility = () => {
    let isAdmin = false;
    if (profile.user.roles) {
      for (var i = 0; i < profile.user.roles.length; i++) {
        if (profile.user.roles[i].name === 'admin') {
          isAdmin = true;
          break;
        }
      }
    }
    return isAdmin ? 'visible' : 'hidden';
  };

  return (
    <>
      <div className={style.home_container}>
        <div className={style.header}>
          <h1>Modul 183</h1>
          <p>{profile.user.userName}</p>
          <button className={style.logout_button} onClick={logout}>
            Logout
          </button>
        </div>
        <div className={style.home_content}>
          <div className={style.sector}>
            <h2>User sector</h2>
            <p>This part of the website can be seen by every user</p>
          </div>
          <div className={(style.sector, setVisibility())}>
            <h2>Admin sector</h2>
            <p>This part of the website can only be seen by admins</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
