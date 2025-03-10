import React from "react";
import { Link } from "react-router-dom";

const CallActionSection = () => {
    return (
        <div className="call-action-section">
            <div className="action-poster">
                <h3>Do you want to sell or lease your Landed property?</h3>
                <h3>What we do best is helping you manage your property</h3>
                <h4>
                    Give us a call <a href="tel:+2349013264015">+234 901 326 4015</a> to get started
                </h4>
            </div>
            <div className="action-caption">
                <h3>Are you looking to sell or lease your landed property? We can help.</h3>
                <Link to="/user-dashboard">
                    <button type="button" className="call-action-button">
                        Sell/Lease your Land
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default CallActionSection;