import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-transparent">
        {/* Navigation Pane */}
        <nav className="sticky top-0 z-50 bg-green-200 bg-opacity-60 backdrop-blur-md p-4 flex justify-center gap-8 shadow-md">
          <Link to="/" className="text-lg font-semibold text-green-800 hover:underline">Home</Link>
          <Link to="/products" className="text-lg font-semibold text-green-800 hover:underline">Products</Link>
          <Link to="/about" className="text-lg font-semibold text-green-800 hover:underline">About</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
 
export default App;