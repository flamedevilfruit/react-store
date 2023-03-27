import React from 'react';
import '../assets/styles/index.css';


const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
    image: '../assets/images/product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    image: '../assets/images/product2.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 300,
    image: '../assets/images/product3.jpg',
  }
]

for (let i = 0; i < products.length; i++) {
  products[i].id = i + 1;
}

export default function Section() {
    return (
      <div className="section">
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





