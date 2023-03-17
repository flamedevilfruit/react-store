/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="header_div">
      <h2 className="header_logo">LOGO</h2>
      <nav className="navbar">
        <ul className='nav_element'>
          <li className='nav_item'><a href="#">Home</a></li>
          <li className='nav_item'><a href="#">Produits</a></li>
          <li className='nav_item'><a href="#">A propos</a></li>
          <li className='nav_item'><a href="#">Contacte</a></li>
        </ul>
      </nav>
      <div className="icons">
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

