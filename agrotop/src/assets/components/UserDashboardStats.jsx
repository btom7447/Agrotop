import React from "react";
import { motion } from "framer-motion";
import Odometer from "react-odometerjs";

const UserDashboardStats = ({ listedProperty, onStatClick }) => {
    const statsData = {
        listedProperty: listedProperty, // Dynamic value
        soldLeased: 5, // Static
        earnings: 250000, // Static
        expenses: 100000, // Static
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
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
            <motion.div className="user-dashboard-stats" variants={itemVariants} onClick={() => onStatClick("listedProperty")}>                
                <h5>Listed Property</h5>
                <h3><Odometer value={statsData.listedProperty} format="(,ddd)" /></h3>
            </motion.div>

            <motion.div className="user-dashboard-stats" variants={itemVariants} onClick={() => onStatClick("soldLeased")}>                
                <h5>Property Sold/Leased</h5>
                <h3><Odometer value={statsData.soldLeased} format="(,ddd)" /></h3>
            </motion.div>

            <motion.div className="user-dashboard-stats" variants={itemVariants} onClick={() => onStatClick("earnings")}>                
                <h5>Total Earnings</h5>
                <h3>₦ <Odometer value={statsData.earnings} format="(,ddd)" /></h3>
            </motion.div>

            <motion.div className="user-dashboard-stats" variants={itemVariants} onClick={() => onStatClick("expenses")}>                
                <h5>Total Expenses</h5>
                <h3>₦ <Odometer value={statsData.expenses} format="(,ddd)" /></h3>
            </motion.div>
        </motion.div>
    );
};

export default UserDashboardStats;