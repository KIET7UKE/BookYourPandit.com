
import './App.css';
import React, { useEffect } from 'react'
import Login from './components/Login';
import Home from './components/Home';
import Services from './components/Services';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { fetchUser } from './utils/fetchUser'

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser()
    if(!user) navigate('/login')
  }, [])

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={
        <div className="App">
          <Home/>
        </div>
      } /> 
      <Route path='/services' element={<Services/> } />
    </Routes>
     
  );
}

export default App;
