import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Odometer from "react-odometerjs";

const UserDashboardStats = () => {
    const [animatedValues, setAnimatedValues] = useState({
        listedProperty: 0,
        soldLeased: 0,
        earnings: 0,
        expenses: 0,
    });

    // Start odometer animation after Framer Motion completes
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimatedValues({
                listedProperty: 10,  // Replace with actual data
                soldLeased: 5,
                earnings: 250000,
                expenses: 100000,
            });
        }, 1200); // Delay for animation sync

        return () => clearTimeout(timeout);
    }, []);

    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }, // Stagger effect
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 10 },
        },
    };

    return (
        <motion.div
            className="user-dashboard-statistics"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="user-dashboard-stats" variants={itemVariants}>
                <h5>Listed Property</h5>
                <h3><Odometer value={animatedValues.listedProperty} format="(,ddd)" /></h3>
            </motion.div>

            <motion.div className="user-dashboard-stats" variants={itemVariants}>
                <h5>Property Sold/Leased</h5>
                <h3><Odometer value={animatedValues.soldLeased} format="(,ddd)" /></h3>
            </motion.div>

            <motion.div className="user-dashboard-stats" variants={itemVariants}>
                <h5>Total Earnings</h5>
                <h3>₦ <Odometer value={animatedValues.earnings} format="(,ddd)" /></h3>
            </motion.div>

            <motion.div className="user-dashboard-stats" variants={itemVariants}>
                <h5>Total Expenses</h5>
                <h3>₦ <Odometer value={animatedValues.expenses} format="(,ddd)" /></h3>
            </motion.div>
        </motion.div>
    );
};

export default UserDashboardStats;
