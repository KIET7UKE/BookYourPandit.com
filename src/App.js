import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../src/Pages/Home';
import fetchUser from './Utils/FetchUser';
import Login from '../src/Pages/Login';
import Services from '../src/Pages/Services';
import Products from '../src/Pages/Products';
import CheckoutPage from '../src/Pages/CheckoutPage';
import Requirement from '../src/Pages/Requirement';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate('/login');
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='App'>
            <Home />
          </div>
        }
      />
      <Route path='login' element={<Login />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/checkoutpage' element={<CheckoutPage />} />
      <Route path='/requirement' element={<Requirement />} />
    </Routes>
  );
}

export default App;
