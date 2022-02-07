import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Plan from './components/Plans/Plan';

function App() {
  return (
    <div className="min-h-screen">

      <Routes>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/plans' element={<Plan />} />
        <Route path="/about" element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path="*" element={<h1 className='text-9xl font-bold text-center'>404 NOT-FOUND</h1>} />

      </Routes>


    </div>
  );
}

export default App;
