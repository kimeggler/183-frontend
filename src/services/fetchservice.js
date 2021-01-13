import config from '../config';
import { getToken, validateToken } from '../helpers/authenticationhelper';

const getDefaultHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

const loginRenewal = () => {
  return `/login`;
};

const getData = async (path, headers = {}) => {
  if (!validateToken()) {
    window.location.replace(loginRenewal());
  }
  const token = getToken();
  const defaultHeaders = getDefaultHeaders(token);
  return fetch(`${config.remoteUrl}${path}`, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  }).then(response => response.json());
};

const postData = async (path, data, headers = {}) => {
  if (!validateToken()) {
    window.location.replace(loginRenewal());
  }
  const token = getToken();
  const defaultHeaders = getDefaultHeaders(token);
  return fetch(`${config.remoteUrl}${path}`, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: data,
  }).then(response => response.json());
};

// const spotifyParams = params =>
//   params
//     ? `?client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&scope=${params.scope}&response_type=token&show_dialog=${params.show_dialog}`
//     : '';

export { getData, postData };
