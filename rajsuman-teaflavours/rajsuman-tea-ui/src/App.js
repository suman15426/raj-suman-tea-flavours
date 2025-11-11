import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-transparent">
      
	  <nav className="w-full flex justify-center items-center bg-green-200 bg-opacity-60 backdrop-blur-md p-4 shadow-md">
	    <div className="flex gap-8">
	      <Link to="/" className="text-lg font-semibold text-green-800 hover:underline">Home</Link>
	      <Link to="/products" className="text-lg font-semibold text-green-800 hover:underline">Products</Link>
	      <Link to="/about" className="text-lg font-semibold text-green-800 hover:underline">About</Link>
	    </div>
	  </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;