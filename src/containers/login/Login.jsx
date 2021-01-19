import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authorize } from '../../services/authservice';
import { validateToken } from '../../helpers/authenticationhelper';
import style from './login.module.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (validateToken()) {
    history.push('/');
  }

  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
  }

  const checkAttempts = (email) => {
    const attempts = Number(document.cookie.split(email + '=')[1]?.charAt(0)) + 1 || 1;
    if (attempts < 4) {
      const expireDate = attempts > 3 ? new Date().addHours(1) : '';
      document.cookie = `${email}=${attempts}; expires=${expireDate}`;
      return true;
    }

    return false;
  }

  const authenticate = async () => {
    const payload = {
      email: email,
      password: password,
    };

    if (checkAttempts(payload.email)) {
      await authorize(payload);
    } else {
      setError('Too much attempts, come back in 1 hour')
    }

  };

  const fieldsEmpty = () => {
    return email === '' || password === '';
  };

  return (
    <div className={style.login}>
      <h1>LOGIN</h1>
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
      <p className={style.error_message}>{error}</p>
      <button
        disabled={fieldsEmpty()}
        onClick={authenticate}
        className={style.login_validation}>
        Login
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
