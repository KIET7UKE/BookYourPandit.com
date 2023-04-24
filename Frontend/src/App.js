import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products';

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
    </Routes>
  );
}

export default App;
