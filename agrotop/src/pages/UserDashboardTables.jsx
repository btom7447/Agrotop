import React from "react";
import DashboardListedProperty from "../assets/components/DashboardListedProperty";

const UserDashboardTables = ({ activeStat, listingsData, loading, error }) => {
    return (
        <div className="user-dashboard-tables">
            {activeStat === "listedProperty" && (
                <DashboardListedProperty listingsData={listingsData} loading={loading} error={error} />
            )}
            {activeStat === "soldLeased" && <div>Sold/Leased Properties</div>}
            {activeStat === "earnings" && <div>Earnings Overview</div>}
            {activeStat === "expenses" && <div>Expense Breakdown</div>}
        </div>
    );
};

export default UserDashboardTables;