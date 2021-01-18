import config from '../config';
import {
  getToken,
  setToken,
  validateToken,
} from '../helpers/authenticationhelper';

const getDefaultHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

const authorize = async (path, data, headers = {}) => {
  if (!validateToken()) {
    window.location.replace(loginRenewal());
  }
  const defaultHeaders = getDefaultHeaders(token);
  return fetch(`${config.authority}`, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: data,
  })
    .then(response => response.json())
    .then(res => setToken(res))
    .catch(e => console.log(e));
};

// const spotifyParams = params =>
//   params
//     ? `?client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&scope=${params.scope}&response_type=token&show_dialog=${params.show_dialog}`
//     : '';

export { authorize };
