import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
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
