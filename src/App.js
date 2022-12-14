import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';

const App = () => {
  return (
    <div className='bg-blue-500 '>
        <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path='/Service' element={<Service/>}></Route>
                    <Route path="*" element={<Home/>}></Route>
              </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;