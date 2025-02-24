import React from "react";
import propertyIcon from '../images/property-icon.png';
import trustIcon from '../images/trust-icon.png';
import financeIcon from '../images/finance-icon.png';
import smileyIcon from '../images/smiley-icon.png';

const StandOutSection = () => {
    return (
        <section className="stand-out-section">
            <h3>How We Stand Out</h3>
            <div className="stand-out">
                <div className="so-item">
                    <img src={propertyIcon} alt="wide range of properties" />
                    <h6>Wide Range of Properties</h6>
                </div>
                <div className="so-item">
                    <img src={trustIcon} alt="trusted by thousands" />
                    <h6>Trusted by thousands</h6>
                </div>
                <div className="so-item">
                    <img src={financeIcon} alt="financing made easy" />
                    <h6>Financing made easy</h6>
                </div>
                <div className="so-item">
                    <img src={smileyIcon} alt="we are here for you " />
                    <h6>We are here for you</h6>
                </div>
            </div>
        </section>
    )
};

export default StandOutSection;