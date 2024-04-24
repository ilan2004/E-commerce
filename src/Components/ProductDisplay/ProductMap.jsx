import React from 'react';
import ProductDisplay from './ProductDisplay';
import all_product from '../../Assets/all_product';

const ProductMap = ({ productId }) => {
  // Filter products based on the productId
  const filteredProducts = productId ? all_product.filter(product => product.id === Number(productId)) : all_product;

  return (
    <div>
      {filteredProducts.map((product, index) => (
        <ProductDisplay
          key={index}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductMap;
