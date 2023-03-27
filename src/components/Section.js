import React from 'react';
import '../assets/styles/index.css';
import products from './Products';



for (let i = 0; i < products.length; i++) {
  products[i].id = i + 1;
}



export default function Section() {
    return (
      <div className="section">
        <h3 className="section__title">Nos produits</h3>
        <div className="section__products">
          {products.map((product, index) => {
            return (
              <div className="section__product" key={index}>
                <img src={product.image} alt={product.title} />
                <div className="section__product__title">{product.title}</div>
                <div className="section__product__price">{product.price}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }





