// src/pages/CategoryPage.js
import React, { useState } from 'react';
import { categories, cakes } from '../data';
import { useCart } from '../contexts/CartContext';
import CakeCard from '../components/CakeCard';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addItemToCart } = useCart();

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddToCart = (cake, quantity) => {
    addItemToCart({ ...cake, quantity });
  };

  const filteredCakes = cakes.filter((cake) => cake.categoryId === selectedCategory);

  return (
    <div>
      <h2>Our Cake Categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="category-button"
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="cakes">
          <h3>Cakes in {categories.find((c) => c.id === selectedCategory)?.name}</h3>
          <div className="cake-list">
            {filteredCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
