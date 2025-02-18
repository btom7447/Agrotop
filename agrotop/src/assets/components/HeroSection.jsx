import React from "react";
import StatsCount from "./StatsCount";
import backDrop from '../images/hero-backdrop.png';
import heroPosterOne from "../images/hero-poster-one.png";
import heroPosterTwo from "../images/hero-poster-two.png";
import HeroFilter from "./HeroFilter";

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* <img src={backDrop} alt="Backdrop image of a map" className="hero-backdrop" /> */}
            <div className="hero-caption">
                <h1>Buy, Lease, or Sell your Landed Property Easily</h1>
                <p>A great platform to buy, sell or even lease your landed proeprties without hassle.</p>
                
                <div className="hero-stats">
                    <StatsCount figure={50000} text='buyers' />
                    <StatsCount figure={10000} text='landed properties' />
                </div>
            </div>
            <img src={heroPosterOne} alt="A poster of Agrotop proeprty listings" className="hero-poster-one" />
            <img src={heroPosterTwo} alt="A poster of Agrotop property listings" className="hero-poster-two" />
            <HeroFilter />
        </section>
    )
};

export default HeroSection;