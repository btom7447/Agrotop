import React, { useState, useEffect } from "react";
import UserDashboardStats from "../assets/components/UserDashboardStats";
import UserDashboardTables from "./UserDashboardTables";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const UserDashboard = () => {
    const [activeStat, setActiveStat] = useState("listedProperty");
    const [listingsData, setListingsData] = useState([]);
    const [financeData, setFinanceData] = useState([]);
    const [transactionData, setTransactionData] = useState([]);
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

    useEffect(() => {
        const fetchTransaction = async () => {
            if (!userData?.id) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${baseURL}/transactions/${userData.id}`);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed to fetch transaction record");
                }

                if (!result.data || Object.keys(result.data).length === 0) {
                    setTransactionData([]);
                    return;
                }

                const transactions = Array.isArray(result.data) ? result.data : [result.data];
                setTransactionData(transactions);
            } catch (error) {
                console.error("Transaction fetch error:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTransaction();
    }, [userData?.id]);



    const soldLeasedProperties = listingsData.filter(property => property.sales_status === "approved").length;
    const earningTransactions = transactionData.filter(transact => transact.type === "earning");
    const expenseTransactions = transactionData.filter(transact => transact.type === "expense");
    const totalEarnings = financeData?.[0]?.earnings || 0;
    const totalExpenses = financeData?.[0]?.total_expenses || 0;

    const handleStatClick = (stat) => {
        setActiveStat(stat);
    };

    return (
        <div className="user-dashboard-page">
            {/* Pass listingsData.length as listedProperty */}
            <UserDashboardStats 
                listedProperty={listingsData.length} 
                soldLeasedProperties={soldLeasedProperties}
                totalEarnings={totalEarnings}
                totalExpenses={totalExpenses}
                onStatClick={handleStatClick} 
                activeStat={activeStat}
            />
            <UserDashboardTables 
                activeStat={activeStat} 
                listingsData={listingsData} 
                earningTransactions={earningTransactions}
                expenseTransactions={expenseTransactions}
                loading={loading} 
                error={error}
            />
        </div>
    );
};

export default UserDashboard;