/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../assets/styles/index.css';
import { format, isSummer } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const myLocalTime = () => {
  const now = new Date();
  const formattedDate = format(now, 'dd/MM/yyyy');
  console.log(formattedDate);
  const SummerTime = isSummer(now, '2020-12-31');
  if (now === SummerTime) {
    return "Profitez de notre offres promotionnelles de l'été";
  }
  else {
    return "Livraison gratuit dès 40$ d'achats";
  }
}

myLocalTime();




class headerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  nextSlide = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    const newIndex = (currentIndex + 1) % slides.length;
    this.setState({
      currentSlide: newIndex
    });
  }

  prevSlide = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    this.setState({
      currentSlide: newIndex
    });
  }

  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;

    return (
      <><div className="header_div">
        <div className="header_sale">
          <h3 className="header_sale_title">{myLocalTime}</h3>
        </div>
      </div>
      <div className="header_nav">
        <h2 className="header_logo">Planta</h2>
        <nav className="navbar">
          <ul className='nav_element'>
            <li className='nav_item'><a href="#">Accueil</a></li>
            <li className='nav_item'><a href="#">Category</a></li>
            <li className='nav_item'><a href="#">Blog</a></li>
            <li className='nav_item'><a href="#">A propos</a></li>
            <li className='nav_item'><a href="#">Potager</a></li>
            <li className='nav_item'><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="icons">
        <a href="#"><FontAwesomeIcon className="icons_i" icon={faSearch} /></a>
        <a href='#'><FontAwesomeIcon className="icons_i" icon={faShoppingCart} /></a>
        <a href="#"><FontAwesomeIcon className="icons_i" icon={faUser} /></a>
        </div>
      </div>
      <div className="slide_container">
        <div className="slide">
        {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={this.prevSlide}>&#8249;</button>
        <button className="next-button" onClick={this.nextSlide}>&#8250;</button>
      </div>
      </>
    )
  }
}

export default headerSlider;

