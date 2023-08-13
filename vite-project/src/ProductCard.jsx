import React from 'react'

const ProductCard = (props) => {
  const { isHovering, setIsHovering, product } = props;

  return (
    <div  className='card' >
            <img  src={product.image} alt=''
            onMouseEnter={()=>setIsHovering(product.id)}
            onMouseLeave={()=> setIsHovering(null)}
            />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p> 

            {isHovering == product.id && (
            <div>
              <p>{product.description}</p>
              </div>
            )}
            </div>
  )
}

export default ProductCard