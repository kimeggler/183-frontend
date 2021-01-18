import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authorize } from '../../services/authservice';
import { validateToken } from '../../helpers/authenticationhelper';
import style from './login.module.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (validateToken()) {
    history.push('/');
  }

  const authenticate = () => {
    authorize(email, password);
  };

  const fieldsEmpty = () => {
    return email === '' || password === '';
  };

  return (
    <div className={style.login}>
      <h1>LOG IN</h1>
      <h2>
        Welcome back, <span style={{ color: '#04dac3' }}>User</span>
      </h2>
      <form className={style.login_form}>
        <input
          name='email'
          value={email}
          placeholder='Type email here...'
          onChange={e => {
            setEmail(e.target.value);
          }}
          type='email'
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
      </form>
      <button
        disabled={fieldsEmpty()}
        onClick={authenticate}
        className={style.login_validation}>
        Authenticate
      </button>

      <button
        className={style.register_button}
        onClick={() => history.push('/register')}>
        Register
      </button>
    </div>
  );
}

export default Login;
