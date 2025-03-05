import React from "react";
import { motion } from "framer-motion";
import StatsCount from "./StatsCount";
import HeroFilter from "./HeroFilter";

const heroPosterOne = require("../images/hero-poster-one.png");
const heroPosterTwo = require("../images/hero-poster-two.png");

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Hero Caption */}
            <div className="hero-caption">
                <motion.h1
                    initial={{ opacity: 0, x: 50 }} // Start offscreen to the right
                    animate={{ opacity: 1, x: 0 }} // Move to normal position
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                >
                    Buy, Lease, or Sell your Landed Property Easily
                </motion.h1>

                <p>
                    A great platform to buy, sell or even lease your landed properties without hassle.
                </p>

                {/* Hero Stats */}
                <div className="hero-stats">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                        <StatsCount figure={50000} text="buyers" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                        <StatsCount figure={10000} text="landed properties" />
                    </motion.div>
                </div>
            </div>

            {/* Images */}
            <motion.img
                src={heroPosterOne}
                alt="A poster of Agrotop property listings"
                className="hero-poster-one"
                initial={{ opacity: 0, x: -50 }} // Fade in from the left
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            <motion.img
                src={heroPosterTwo}
                alt="A poster of Agrotop property listings"
                className="hero-poster-two"
                initial={{ opacity: 0, y: -100 }} // Fade in + move up
                animate={{ opacity: 1, y: -200 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />

            <HeroFilter />
        </section>
    );
};

export default HeroSection;