/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <><div className="header_img_background">
      <div className="header_div">
        <h2 className="header_logo">Planta</h2>
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
          <a href='#'><FontAwesomeIcon className="icons_i" icon={faSearch} /></a>
        </div>
      </div><div className="header_title">
        <h3 className="header_title_text">Donnez à votre décor végétal <br/>une touche minimaliste et contemporaine</h3>
        <p className="header_subtitle_text">Pour céer des espaces vertes intérieurs qui prennent vie, il est essentiel<br/> de comprendre les personnes qui habitent la maison et leurs besoins en matière de plantes.</p>
        <button className="header_button"><a href='#'>Commander</a></button>
      </div>
      </div>
    </>
  );
}

