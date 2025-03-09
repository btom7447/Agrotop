import React from "react";
import instagramIcon from '../images/instagram-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import whatsAppIcon from '../images/whatsapp-icon.png';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h3>Let's Talk</h3>
            <p>Want to know more about our services and what we offer or have some big idea? Then reach out we'd love to hear about it and provide adequate assistance.</p>

            <div className="contact-mediums">
                <div className="contact">
                    <h6>Our Social Handles</h6>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/agrotop_homes" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram Icon" />
                                @agrotop_official
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/agrotop_homes" target="_blank" rel="noopener noreferrer">
                                <img src={twitterIcon} alt="Instagram Icon" />
                                @agrotop_official
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/agrotop_homes" target="_blank" rel="noopener noreferrer">
                                <img src={facebookIcon} alt="Instagram Icon" />
                                @agrotop_official
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/c/2349013264015" target="_blank" rel="noopener noreferrer">
                                <img src={whatsAppIcon} alt="WhatsApp Icon" />
                                +234 901 326 4015
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact">
                    <h6>General Enquiries</h6>
                    <ul>
                        <li>
                            <a href="https://wa.me/c/2349013264015" target="_blank" rel="noopener noreferrer">
                                +2349013264015
                            </a>
                        </li>
                        <li>
                            <a href="mailto:agrotop.global@gmail.com">
                                agrotop.global@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact">
                    <h6>Our Head Office</h6>
                    <ul>
                        <li>Meatbyte bus stop Alapako off lagos Ibadan expressway, Ajebo ogunmakin Road. Ogun State, Nigeria.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;