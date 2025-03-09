import React from "react";
import logo from '../images/logo.png';
import instagramIcon from '../images/instagram-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import whatsAppIcon from '../images/whatsapp-icon.png';
import mastercardIcon from '../images/mastercard-icon.png';
import visaIcon from '../images/visa-icon.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <div className="t-f-one">
                    <img src={logo} alt="Agrotop logo" />
                    <h6 style={{ marginBottom: '20px' }}>To create an avenue for affordability and transparency</h6>
                    <p>
                        Agrotop is Nigeria's foremost destination for property seekers looking for their verified lands – from affordable choices to unique locations. We bridge the divide between affordability and transparency, ensuring that every Nigerian and those in the Diaspora can find an easy place to erect a building or farm.
                    </p>
                </div>
                <div className="features-links">
                    <h6>Features</h6>
                    <ul>
                        <li>
                            <NavLink to="/listings">
                                Listed Properties
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>  
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="follow-accept">
                    <div className="follow-links" style={{ marginBottom: '20px' }}>
                        <h6>Follow us</h6>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/agrotop_homes" target="_blank" rel="noopener noreferrer">
                                    <img src={instagramIcon} alt="Instagram Icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                                    <img src={twitterIcon} alt="X Icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="Facebook icon" style={{ width: '30px'}} />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/c/2349013264015" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsAppIcon} alt="WhatsApp icon" style={{ width: '30px'}} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="we-accept">
                        <h6>We accept</h6>
                        <ul>
                            <li>
                                <img src={mastercardIcon} alt="Master Card Icon" />
                            </li>
                            <li>
                                <img src={visaIcon} alt="Visa Card Icon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>&copy; {new Date().getFullYear()} Agrotop Official. All Rights Reserved</p>
                <div className="footer-modal-link">
                    <ul>
                        <li>Terms</li>
                        <li>-</li>
                        <li>Privacy Policy</li>
                        <li>-</li>
                        <li>Site Map</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;