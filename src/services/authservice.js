import config from '../config';
import {
  setToken,
  getToken,
  validateToken,
} from '../helpers/authenticationhelper';

const loginRenewal = () => {
  return `/login`;
};

const getDefaultHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const authorize = async (data, headers = {}) => {
  const defaultHeaders = getDefaultHeaders();
  return await fetch(`${config.authority}/login`, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(res => setToken(res))
    .catch(e => console.log(e));
};

const register = async (data, headers = {}) => {
  const defaultHeaders = getDefaultHeaders();
  return fetch(`${config.authority}/register`, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(res => setToken(res))
    .catch(e => console.log(e));
};

const getProfile = async (path, headers = {}) => {
  if (!validateToken()) {
    window.location.replace(loginRenewal());
  }
  const token = getToken();
  const defaultHeaders = getDefaultHeaders(token);
  return fetch(`${config.authority}/me`, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      ...headers,
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(response => response.json());
};

// const spotifyParams = params =>
//   params
//     ? `?client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&scope=${params.scope}&response_type=token&show_dialog=${params.show_dialog}`
//     : '';

export { authorize, register, getProfile };
