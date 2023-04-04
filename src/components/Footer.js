/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-6 font-bold text-white">Nous contacter</h5>
          <p className='text-white'>134 rue de la paix, 75001 Paris</p>
          <p className="text-white">contact@ma-boutique-de-plantes.com</p>
          <p className="text-white">06 12 34 56 78</p>
        </div>
          </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h5 className="uppercase mb-6 font-bold text-white">Informations</h5>
          <ul className="list-reset">
            <li className="my-3"><a href="#" className="text-white hover:underline">Livraison et retours</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Conditions d'utilisation</a></li>
            <li className="my-3"><a href="#" className="text-white hover:underline">Politique de confidentialité</a></li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
