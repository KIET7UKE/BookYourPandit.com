import './App.css';
import React, { useEffect } from 'react'
import Home from './components/Home';
import Services from './components/Services';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import Requirement from './components/Requirement';
import Login from './components/Login';
import { fetchUser } from './Utils/fetchUser'


function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser()
    if(!user) navigate('/login')
  }, [])

  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <Home/>
        </div>
      } />
      <Route path='login' element={<Login />} />
      <Route path='/services' element={<Services/> } />
      <Route path='/products' element={<Products/> } />
      <Route path='/checkoutpage' element={<CheckoutPage/> } />
      <Route path='/requirement' element={<Requirement/> } />
    </Routes>
  );
}

export default App;
