import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import Requirement from './components/Requirement';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <Home/>
        </div>
      } />
      <Route path='/services' element={<Services/> } />
      <Route path='/products' element={<Products/> } />
      <Route path='/checkoutpage' element={<CheckoutPage/> } />
      <Route path='/requirement' element={<Requirement/> } />
    </Routes>
  );
}

export default App;
