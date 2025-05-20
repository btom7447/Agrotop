import React from "react";
import DashboardListedProperty from "../assets/components/DashboardListedProperty";
import DashboardSoldLeasedProperty from "../assets/components/DashboardSoldLeasedProperty";
import DashboardTotalEarnings from "../assets/components/DashboardTotalEarnings";
import DashboardTotalExpenses from "../assets/components/DashboardTotalExpenses";

const UserDashboardTables = ({ activeStat, listingsData, earningTransactions, expenseTransactions, loading, error }) => {

    return (
        <div className="user-dashboard-tables">
            {activeStat === "listedProperty" && (
                <DashboardListedProperty listingsData={listingsData} loading={loading} error={error} />
            )}
            {activeStat === "soldLeased" && (
                <DashboardSoldLeasedProperty listingsData={listingsData} loading={loading} error={error} />
            )}            
            {activeStat === "earnings" && (
                <DashboardTotalEarnings earningTransactions={earningTransactions} loading={loading} error={error} />
            )}
            {activeStat === "expenses" && (
                <DashboardTotalExpenses expenseTransactions={expenseTransactions} loading={loading} error={error} />
            )}
        </div>
    );
};

export default UserDashboardTables;