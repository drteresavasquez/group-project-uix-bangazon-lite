import React from 'react';
import { Link } from 'react-router-dom';

import './styles/VerticalMenu.css';

const VerticalMenu = ({ products }) => (
    <div className='ui secondary vertical menu'>
        <div className='header item'>
            Products
        </div>
        {
        products.map((product) => (
            <Link 
                to={`/product/${product.id}`}
                className='item'
                key={product.id}
                >
                {product.product_name}
            </Link> 
            ))
        }

    </div>
);
export default VerticalMenu;