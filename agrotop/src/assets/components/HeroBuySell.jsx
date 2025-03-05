import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import placeholderIcon from require("../images/placeholder-icon.png");

const buySellPoster = require("../images/buy-sell-poster.png");
const vettedIcon = require("../images/vetted-icon.png");


const HeroBuySell = () => {
    return (
        <section className="hero-buy-sell">
            {/* Poster with Infinite Sway Animation */}
            <motion.div 
                className="hero-bs-poster"
                animate={{ x: [-5, 5, -5] }} // Sway left to right
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} // Infinite loop
            >
                <img src={buySellPoster} alt="Image of a virgin land for sale" className="buy-sell-poster" />

                {/* Vetted Seller Tag - Slides Right into View */}
                <motion.div 
                    className="vetted-seller-tag"
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img src={vettedIcon} alt="Vetted Icon" />
                    <div>
                        <h6>Fully Vetted Sellers</h6>
                        <p>We ensure our platform is safe</p>
                    </div>
                </motion.div>

                {/* Best Deal Tag - Slides Up into View */}
                <motion.div 
                    className="best-deal-tag"
                    initial={{ opacity: 0, y: 50 , x: -50 }} 
                    whileInView={{ opacity: 1, y: 0, x: -100 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div>
                        <h6>Find the best deal</h6>
                        <p>Browse thousands of properties</p>
                    </div>
                    <img src={placeholderIcon} alt="Placeholder Icon" />
                </motion.div>
            </motion.div>

            {/* Buy/Sell Caption Section */}
            <div className="buy-sell-caption">
                <div className="buttons">
                    <button type="button" className="sell-lease">
                        <NavLink to='/create-listing'>Sell/Lease your Land</NavLink>
                    </button>
                    <button type="button">
                        <NavLink to='/listings'>Buy Land</NavLink>
                    </button>
                </div>

                {/* Title and Description Animations */}
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    We make it easy for buyers and sellers
                </motion.h3>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Whether it's selling your land, lease, or buying a new land, we made it easy and efficient. The best part is you'll save a bunch of money and time with our services.
                </motion.p>

                <button type="button" className="see-more">
                    <NavLink to='/about'>See more</NavLink>
                </button>
            </div>
        </section>
    );
};

export default HeroBuySell;