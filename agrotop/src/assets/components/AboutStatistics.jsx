import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, stagger, useAnimation } from "framer-motion";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css"; // Import Odometer CSS

const AboutStatistics = () => {
    const statsRef = useRef(null); // Ref for the stats container
    const isInView = useInView(statsRef, { once: true }); // Check if the stats are in view
    const controls = useAnimation(); // Framer Motion controls

    // State for odometer values
    const [odometerValues, setOdometerValues] = useState({
        globalReach: 0,
        localExpertise: 0,
        ourNetwork: 0,
        ourImpact: 0,
    });

    // Framer Motion variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the animations of child elements
            },
        },
    };

    const statVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Trigger animations when the stats are in view
    useEffect(() => {
        if (isInView) {
            controls.start("visible"); // Start Framer Motion animation
            // Trigger odometer animations after a delay
            setTimeout(() => {
                setOdometerValues({
                    globalReach: 35,
                    localExpertise: 120,
                    ourNetwork: 300,
                    ourImpact: 239,
                });
            }, 1000); // Delay to match the Framer Motion animation
        }
    }, [isInView, controls]);

    return (
        <section className="about-statistics" ref={statsRef}>
            <h4>Our Stats</h4>
            <motion.div
                className="statistics-grid"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {/* Global Reach */}
                <div className="stats">
                    <motion.div className="stat" variants={statVariants}>
                        
                        <h5>Global Reach</h5>
                        <span>
                            <Odometer value={odometerValues.globalReach} format="(,ddd)" />
                        </span>
                        <p>States and local areas</p>
                    </motion.div>
                </div>

                {/* Local Expertise */}
                <div className="stats">
                    <motion.div className="stat" variants={statVariants}>
                        <h5>Local Expertise</h5>
                        <span>
                            <Odometer value={odometerValues.localExpertise} format="(,ddd)" />
                        </span>
                        <p>Employees</p>
                    </motion.div>
                </div>
                {/* Our Network */}
                <div className="stats">
                    <motion.div className="stat" variants={statVariants}>
                        <h5>Our Network</h5>
                        <span>
                            <Odometer value={odometerValues.ourNetwork} format="(,ddd)" />
                        </span>
                        <p>Project Areas</p>
                    </motion.div>
                </div>

                {/* Our Impact */}
                <div className="stats">
                    <motion.div className="stat" variants={statVariants}>
                        <h5>Our Impact</h5>
                        <span>
                            <Odometer value={odometerValues.ourImpact} format="(,ddd)" />
                        </span>
                        <p>Projects Done</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutStatistics;