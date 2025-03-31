import React, { useState, useEffect } from "react";
import UserDashboardStats from "../assets/components/UserDashboardStats";
import UserDashboardTables from "./UserDashboardTables";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const UserDashboard = () => {
    const [activeStat, setActiveStat] = useState("listedProperty");
    const [listingsData, setListingsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let userData;
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error("Error parsing user data:", error);
        userData = null;
    }

    useEffect(() => {
        const fetchListings = async () => {
            if (!userData?.id) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${baseURL}/listing/user/${userData.id}`);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed to fetch listings");
                }

                if (result.message === "No listings found for this user" || !Array.isArray(result.data)) {
                    setListingsData([]);
                    return;
                }

                setListingsData(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, [userData?.id]);

    const handleStatClick = (stat) => {
        setActiveStat(stat);
    };

    return (
        <div className="user-dashboard-page">
            {/* Pass listingsData.length as listedProperty */}
            <UserDashboardStats listedProperty={listingsData.length} onStatClick={handleStatClick} />
            <UserDashboardTables activeStat={activeStat} listingsData={listingsData} loading={loading} error={error} />
        </div>
    );
};

export default UserDashboard;