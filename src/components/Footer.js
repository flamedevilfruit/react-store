/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedIn } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
  render() {
    return (
      <footer className="bg-green-500 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-6 font-bold text-white">Nous contacter</h5>
          <p className='text-white'>134 rue de la paix, 75001 Paris</p>
          <p className="text-white">contact@ma-boutique-de-plantes.com</p>
          <p className="text-white">06 12 34 56 78</p>
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
          <FontAwesomeIcon icon={faTwitter} className="text-white" />
          <FontAwesomeIcon icon={faLinkedIn} className="text-white" />
        </div>
          </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h5 className="uppercase mb-6 font-bold text-white">Help</h5>
          <ul className="list-reset">
            <li className="my-3"><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Shipping & Delivery</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Refund Policy</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Track Your Order</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h5 className="uppercase mb-6 font-bold text-white">Store</h5>
          <ul className="list-reset">
            <li className="my-3"><a href="#" className="text-white hover:underline">Indoor Plants</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Outdoor Plants</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Pet Friendly</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Cactus Plants</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h5 className="uppercase mb-6 font-bold text-white">Supports</h5>
          <ul className="list-reset">
            <li className="my-3"><a href="#" className="text-white hover:underline">Feedback</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Contact Us</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Terms Conditions</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Download App</a></li>
          </ul>
        </div>
        <div className="reserved_foot">
          <h3 className="uppercase mb-6 font-bold text-white">Planta - All rights reserved</h3>
          <li className="my-3"><a href="#" className="text-white hover:underline">Privacy</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Security</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Terms</a></li>
        </div>
    </footer>
    )
  }
}

export default Footer;
