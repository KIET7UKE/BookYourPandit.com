import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  //   baseURL: '', //server API
  headers: { 'X-Custom-Header': 'foobar' },
});
