// src/components/CakeCard.js
import React, { useState } from 'react';

const CakeCard = ({ cake, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart(cake, quantity);
  };

  return (
    <div className="cake-card">
      <div className="cake-card-image">
        <img src={cake.image} alt={cake.name} />
      </div>
      <div className="cake-card-body">
        <h4>{cake.name}</h4>
        <p>{cake.description}</p>
        <p className="cake-price">${cake.price.toFixed(2)}</p>
        <div className="cake-card-footer">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
