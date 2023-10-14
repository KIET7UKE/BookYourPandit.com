import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import fetchUser from './Utils/fetchUser';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Services from './Pages/Services';
import Products from './Pages/Products';
import CheckoutPage from './Pages/CheckoutPage';
import Requirement from './Pages/Requirement';

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const user = fetchUser();
  //   if (!user) navigate('/login');
  // }, []);

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
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/checkoutpage' element={<CheckoutPage />} />
      <Route path='/requirement' element={<Requirement />} />
    </Routes>
  );
}

export default App;
