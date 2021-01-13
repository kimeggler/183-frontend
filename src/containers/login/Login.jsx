import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authservice from '../../services/authservice';
import { validateToken } from '../../helpers/authenticationhelper';
import style from './login.module.css';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  if (validateToken()) {
    history.push('/');
  }

  const submit = () => {
    authservice.authorize(user, password);
  };

  return (
    <div className={style.login}>
      <h1>SAVE YOUR DATA</h1>
      <h2>
        Welcome back, <span style={{ color: '#04dac3' }}>User</span>
      </h2>
      <form className={style.login_form} onSubmit={submit}>
        <input
          name='user'
          value={user}
          placeholder='Type username here...'
          onChange={e => {
            setUser(e.target.value);
          }}
          type='user'
        />
        <input
          name='password'
          value={password}
          placeholder='Type password here...'
          onChange={e => {
            setPassword(e.target.value);
          }}
          type='password'
        />
        <button type='submit' onClick={null}>
          Authenticate
        </button>
      </form>
    </div>
  );
}

export default Login;
