import React, { Component } from 'react';
import Product from './Product';
import './Products.css';

export default class ProductsContainer extends Component{
    state = {
        fetched: false,
        products: [],
      };

      componentDidMount() {
        this.getProducts();
      };

      getProducts = () => {
        
        fetch(`http://localhost:4000/products`)
        .then((data)=>{
            return data.json();
        }).then((productsArray)=>{
            this.setState({
              fetched: true,
              products: productsArray,
            })
        });
      };
    
    render() {
      if (!this.state.fetched) {
        return (
          <div className='ui active centered inline loader' />
        );
      } else {
        return (
            <div className="prodContainer">
            <h1>Products</h1>
            <div className="row">
                <div className="col-sm-3">
                1 of 2
                </div>
                <div className="col-sm-8">
                {
                    this.state.products.map((p) => (
                    <div
                    className='row'
                    key={p.id}
                    >
                    <Product product={p} />
                    </div>
                    ))
                }
                </div>
            </div>
            </div>
        )
    }
    } 
}