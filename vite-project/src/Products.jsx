import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products?');

    const data = await response.json();
    setProducts(data);
}

function handleClick(){
  alert('Buy at discounted price today!')
}
  return (
    <div>
      <h1>Discount Sales!!</h1>
      <div className='item-container' >
        {products.map((product) => (
          <div  className='card' key={product.id}>
            <img onClick={handleClick} src={product.image} alt='' />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products