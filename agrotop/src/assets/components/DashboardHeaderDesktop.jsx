import React, { useState } from "react";
import Notification from "./Notification";

const DashboardHeaderDesktop = ({ userData, totalExpenses, totalEarnings }) => {
    const placeholder = "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?uid=R107376497&ga=GA1.1.1763716520.1741551944&semt=ais_hybrid";
    return (
        <div className="dashboard-header-desktop">
            <Notification />

            {/* Earnings Section */}
            <div className="earning-balance">
                <h4>Earnings: <span className="earnings">₦{totalEarnings}</span></h4>
                <h4>Outstanding Bal: <span className="balance">₦{totalExpenses}</span></h4>
            </div>

            {/* User Profile */}
            <div className="user-profile">
                <img
                    src={!userData.image ? placeholder : userData.image}
                    alt={userData.name}
                />                
                <h6>Hi, {userData.name.split(' ')[0]}</h6>
            </div>
        </div>
    );
};

export default DashboardHeaderDesktop;