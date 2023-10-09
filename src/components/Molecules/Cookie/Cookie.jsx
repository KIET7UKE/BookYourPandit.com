import React from 'react';
import { useCookies } from 'react-cookie';

const CookieService = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userEmail']);

  const setUserCookie = (value, options = {}) => {
    setCookie('userEmail', value, options);
  };

  const getUserCookie = () => {
    return cookies.userEmail || null;
  };

  const removeUserCookie = () => {
    removeCookie('userEmail');
  };

  return {
    setUserCookie,
    getUserCookie,
    removeUserCookie,
  };
};

export default CookieService