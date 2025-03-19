import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSideBar";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="dashboard-pages">
                <DashboardSidebar 
                    isSidebarOpen={isSidebarOpen} 
                    toggleSidebar={toggleSidebar}
                />
                <DashboardHeader 
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