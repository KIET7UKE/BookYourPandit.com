import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  //   baseURL: 'https://byp-server.onrender.com/api', //server API
  headers: { 'X-Custom-Header': 'foobar' },
});
