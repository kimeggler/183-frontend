import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './home.module.css'

function Home() {
  const history = useHistory();

  const logout = () => {
    //TODO: delete token
    history.push('/login')
  }

  return (
    <>
      <div className={style.home_container}>
        <div className={style.header}>
          <h1>Modul 183</h1>
          <button className={style.logout_button} onClick={logout}>Logout</button>
        </div>
        <div className={style.home_content}>
          <div className={style.sector}>
            <h2>User sector</h2>
            <p>This part of the website can be seen by every user</p>
          </div>
          <div className={style.sector}>
            <h2>Admin sector</h2>
            <p>This part of the website can only be seen by admins</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;