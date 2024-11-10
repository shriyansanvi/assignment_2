// src/pages/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, totalCost, removeItemFromCart, updateItemQuantity } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                />
                <button className='remove' onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total Cost: ${totalCost}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
