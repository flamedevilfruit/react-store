/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends React.Component {
  render() {
    return (
        <footer>
        <div class="footer_container">
            <div class="footer_logo">
                <p class="footer_title">©2023 planta</p>
            </div>
            <div class="footer_menu">
                <nav class="footer_menu_nav">
                    <a href="./index.html" class="footer_menu_nav_item">Mention Legal</a>
                    <a href="./product.html" class="footer_menu_nav_item">Newsletter</a>
                    <a href="./about.html" class="footer_menu_nav_item">Nous joindre</a>
                    <a href="./contact.html" class="footer_menu_nav_item">Contact</a>
                </nav>
            </div>
            <div class="footer_social_icons">
            <a href='#'><FontAwesomeIcon className="icons_i" icon={faFacebook} /></a>
            <a href='#'><FontAwesomeIcon className="icons_i" icon={faInstagram} /></a>
            <a href='#'><FontAwesomeIcon className="icons_i" icon={faTwitter} /></a>
            </div>
            </div>
    </footer>
)}
    }