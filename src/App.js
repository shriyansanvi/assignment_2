// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
// src/App.js or the specific component file
import './App.css';


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
