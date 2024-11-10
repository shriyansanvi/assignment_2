// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Cake Shop</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
