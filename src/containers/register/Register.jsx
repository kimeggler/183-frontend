import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authorize } from '../../services/authservice';
import { validateToken } from '../../helpers/authenticationhelper';
import style from './register.module.css';

function Register() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (validateToken()) {
    history.push('/');
  }

  const register = () => {
    authorize(email, password);
  };

  const fieldsEmpty = () => {
    return (
      firstName === '' || lastName === '' || email === '' || password === ''
    );
  };

  return (
    <div className={style.register}>
      <h1>SIGN UP</h1>
      <form className={style.register_form}>
        <input
          name='firstname'
          value={firstName}
          placeholder='Type first name here...'
          onChange={e => {
            setFirstName(e.target.value);
          }}
          type='string'
        />
        <input
          name='lastname'
          value={lastName}
          placeholder='Type last name here...'
          onChange={e => {
            setLastName(e.target.value);
          }}
          type='string'
        />
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
        <input
          name='confirm-password'
          value={confirmPassword}
          placeholder='Confirm password...'
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
          type='password'
        />
      </form>
      <button
        disabled={password !== confirmPassword || fieldsEmpty()}
        onClick={register}
        className={style.register_validation}>
        Register
      </button>
      <button
        className={style.login_button}
        onClick={() => history.push('/login')}>
        Back to Login
      </button>
    </div>
  );
}

export default Register;
