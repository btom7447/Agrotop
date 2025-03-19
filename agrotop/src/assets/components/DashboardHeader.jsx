import React from "react";
import { Navigate } from "react-router-dom";
import DashboardHeaderDesktop from "./DashboardHeaderDesktop";
import DashboardHeaderMobile from "./DashboardHeaderMobile";

const DashboardHeader = ({ toggleSidebar, isSidebarOpen }) => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");

    // Safely retrieve and parse user data
    let userData;
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error("Error parsing user data:", error);
        userData = null;
    }

    // Redirect to login if not logged in
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="dashboard-header">
            <DashboardHeaderDesktop userData={userData} />
            <DashboardHeaderMobile 
                userData={userData} 
                toggleSidebar={toggleSidebar} 
                isSidebarOpen={isSidebarOpen}
            />
        </div>
    );
};

export default DashboardHeader;