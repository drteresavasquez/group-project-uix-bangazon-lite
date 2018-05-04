import React from 'react';
// import { Link } from 'react-router-dom';


const Product = ({ product }) => (
  <div className='Product'>
    <div className='row'>
      <div className='ui middle aligned three column grid'>
        <div className='six wide column' style={{ minWidth: '212px' }}>
          <img
            src={product.image}
            style={{ width: '212px' }}
            alt='product'
          />
        </div>
        <div className='one wide column' />
        <div className='six wide column'>
          <p>
            {
              `${product.product_name} (${product.qty})`
            }
          </p>
          <p>
            {
              `$${product.price}`
            }
          </p>
          <div
            className='ui left floated large button buyNow'
          >
            More Info
          </div>
        </div>
      </div>
    </div>
    <div className='productPadding' />
  </div>
);

export default Product;
