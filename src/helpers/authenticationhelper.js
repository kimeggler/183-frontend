const validateToken = () => {
  if (getToken() !== null) {
    if (Math.abs(new Date().getTime() / 1000 - getTokenTimeStamp()) >= 3600) {
      clearToken();
      return false;
    } else {
      return true;
    }
  }
  clearToken();
  return false;
};

// const getTokenFromURL = () => {
//   if (window.location.href.split('#')[1] !== undefined) {
//     return window.location.href.split('#')[1].split('&')[0].split('=')[1];
//   }
//   return null;
// };

const getToken = () => {
  return window.localStorage.getItem('183_token');
};

const getTokenTimeStamp = () => {
  return window.localStorage.getItem('183_timestamp');
};

const clearToken = () => {
  window.localStorage.clear();
};

const setToken = async token => {
  if (token) {
    const timeStamp = new Date();
    window.localStorage.setItem('183_token', token);
    window.localStorage.setItem('183_timestamp', timeStamp.getTime() / 1000);
  }
};

export { validateToken, setToken, getToken, clearToken };
