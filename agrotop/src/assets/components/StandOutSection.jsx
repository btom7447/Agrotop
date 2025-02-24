import React from "react";
import { motion } from "framer-motion";
import propertyIcon from '../images/property-icon.png';
import trustIcon from '../images/trust-icon.png';
import financeIcon from '../images/finance-icon.png';
import smileyIcon from '../images/smiley-icon.png';

const StandOutSection = () => {
    // Parent container animation - controls stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Each child animates after the previous one
            },
        },
    };

    // Individual .so-item animation
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section className="stand-out-section">
            <h3>How We Stand Out</h3>
            <motion.div 
                className="stand-out"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }} // Triggers animation when in view
            >
                {[
                    { icon: propertyIcon, text: "Wide Range of Properties" },
                    { icon: trustIcon, text: "Trusted by thousands" },
                    { icon: financeIcon, text: "Financing made easy" },
                    { icon: smileyIcon, text: "We are here for you" }
                ].map((item, index) => (
                    <motion.div 
                        className="so-item" 
                        key={index} 
                        variants={itemVariants} 
                    >
                        <img src={item.icon} alt={item.text} />
                        <h6>{item.text}</h6>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default StandOutSection;
