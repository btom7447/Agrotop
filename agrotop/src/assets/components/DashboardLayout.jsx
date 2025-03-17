import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSideBar";
import DashboardHeaderMobile from "./DashboardHeaderMobile";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="dashboard-pages">
                <DashboardSidebar className={isSidebarOpen ? "open" : ""} />
                <DashboardHeaderMobile
                    userData={JSON.parse(localStorage.getItem("userData") || sessionStorage.getItem("userData"))}
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />
                <div className="dashboard-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;