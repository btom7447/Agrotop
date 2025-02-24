import React from "react";
import { NavLink } from "react-router-dom";
import buySellPoster from "../images/buy-sell-poster.png";
import vettedIcon from "../images/vetted-icon.png";
import placeholderIcon from "../images/placeholder-icon.png";

const HeroBuySell = () => {
    return (
        <section className="hero-buy-sell">
            <div className="hero-bs-poster">
                <img src={buySellPoster} alt="Image of a virgin land for sale" className="buy-sell-poster" />
                <div className="vetted-seller-tag">
                    <img src={vettedIcon} alt="Vetted Icon" />
                    <div>
                        <h6>Fully Vetted Sellers</h6>
                        <p>We ensure our platform is safe</p>
                    </div>
                </div>
                <div className="best-deal-tag">
                    <div>
                        <h6>Find the best deal</h6>
                        <p>Browse thousands of properties</p>
                    </div>
                    <img src={placeholderIcon} alt="Placeholder Icon" />
                </div>
            </div>
            <div className="buy-sell-caption">
                <div className="buttons">
                    <button type="button" className="sell-lease">
                        <NavLink to='/create-listing'>
                            Sell/Lease your Land
                        </NavLink>
                    </button>
                    
                    <button type="button">
                        <NavLink to='/listings'>
                            Buy Land
                        </NavLink>
                    </button>
                </div>
                <h3>We make it easy for buyers and sellers</h3>
                <p>
                    Whether it's selling your land, lease, or buying a new land, we made it easy and efficient. The best part you'll have a bunch of money and time with our services.
                </p>
                <button type="button" className="see-more">
                    <NavLink to='/about'>
                        See more
                    </NavLink>
                </button>
            </div>
        </section>
    )
};

export default HeroBuySell;