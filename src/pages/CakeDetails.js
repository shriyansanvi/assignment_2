
import React from 'react';
import { useParams } from 'react-router-dom';

const CakeDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Cake Details for Cake {id}</h2>
      <p>Details about the cake...</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
