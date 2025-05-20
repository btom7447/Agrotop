import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardHeaderDesktop from "./DashboardHeaderDesktop";
import DashboardHeaderMobile from "./DashboardHeaderMobile";

const DashboardHeader = ({ toggleSidebar, isSidebarOpen }) => {
    const [financeData, setFinanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
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

        useEffect(() => {
            const fetchFinance = async () => {
                if (!userData?.id) {
                    setLoading(false);
                    return;
                }
    
                try {
                    const response = await fetch(`${baseURL}/finance/${userData.id}`);
                    const result = await response.json();
    
                    if (!response.ok) {
                        throw new Error(result.message || "Failed to fetch finance record");
                    }
    
                    if (result.message === "No finance record found for this user" || !Array.isArray(result.data)) {
                        setFinanceData([]);
                        return;
                    }
    
                    setFinanceData(result.data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchFinance();
        }, [userData?.id]);

        const totalEarnings = financeData?.[0]?.earnings || 0;
        const totalExpenses = financeData?.[0]?.total_expenses || 0;


    // Redirect to login if not logged in
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="dashboard-header">
            <DashboardHeaderDesktop 
                userData={userData} 
                totalEarnings={totalEarnings}
                totalExpenses={totalExpenses}
            />
            <DashboardHeaderMobile 
                userData={userData} 
                toggleSidebar={toggleSidebar} 
                isSidebarOpen={isSidebarOpen}
            />
        </div>
    );
};

export default DashboardHeader;