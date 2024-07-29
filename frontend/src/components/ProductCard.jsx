import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  console.log('Product:', product); // Add this line

  return (
    <div className="border rounded p-4">
      <Link to={`/product/${product._id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
    </div>
  );
};
