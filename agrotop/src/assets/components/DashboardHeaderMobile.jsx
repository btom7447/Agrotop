import React from "react";

const DashboardHeaderMobile = ({ userData }) => {
    return (
        <div className="dashboard-header-mobile">
            <h1>Welcome, {userData.name || "User"}!</h1>
            <p>Email: {userData.email}</p>
            <h2>Mobile Header</h2>
        </div>
    )
};

export default DashboardHeaderMobile;