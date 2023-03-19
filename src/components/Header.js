/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div>
      <div className="header_div">
      <h2 className="header_logo">Store</h2>
      <nav className="navbar">
        <ul className='nav_element'>
          <li className='nav_item'><a href="#">Accueil</a></li>
          <li className='nav_item'><a href="#">Nos produits</a></li>
          <li className='nav_item'><a href="#">A propos</a></li>
          <li className='nav_item'><a href="#">Nous contacter</a></li>
        </ul>
      </nav>
      <div className="icons">
        <a href='#'><FontAwesomeIcon className="icons_i" icon={faShoppingCart} /></a>
        <a href='#'><FontAwesomeIcon className="icons_i" icon={faUser} /></a>
      </div>
    </div><div className="header_title">
        <h3 className="header_title_text">Découvres nos toutes nouvelles Céramiques</h3>
        <p className="header_subtitle_text">Profitez de -30% de réduction sur votre première commande avec le code: <span>ceramic2023</span><br />Offre disponible jusqu'à fin mars.</p>
        <a href='#'><button className="header_button">Commander</button></a>
      </div>
    </div>
  );
}

