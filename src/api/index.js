/* eslint-disable */
import request from '../utils/request';

const urls = {
  login:
    'https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456',
};

// options使用规范参考：https://github.github.io/fetch/  ，包含method、headers、body等
const defaultGetOptions = {
  method: 'GET',
};
const defaultPostOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify(data),
};

export const login = () => request(urls.login, defaultGetOptions);
