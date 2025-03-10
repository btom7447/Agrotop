import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSideBar";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <DashboardSidebar />
            <div className="dashboard-pages">
                <DashboardHeader />
                {children} 
                <Footer />
            </div>
        </>
    );
};

export default DashboardLayout;