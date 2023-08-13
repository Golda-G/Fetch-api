import React from 'react';
import { useState, useEffect } from 'react';
import './Products.css';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isHovering, setIsHovering] = useState(null)

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');

    const data = await response.json();
    setProducts(data);
}



  return (
    <div>
      <h1>Discount Sales!!</h1>
      
      <div className='item-container' >
        {products.map((product,index) => (
          <ProductCard isHovering={isHovering} setIsHovering={setIsHovering} key={product.id} product={product} />
            ))}

            
        
      </div>
    </div>
  )
}

export default Products