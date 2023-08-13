/**
 * token操作
 */

const USER_TOKEN = 'token';
export const setToken = (token = '') => {
  localStorage.setItem(USER_TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(USER_TOKEN) || '';
};

export const removeToken = () => {
  localStorage.removeItem(USER_TOKEN);
};
