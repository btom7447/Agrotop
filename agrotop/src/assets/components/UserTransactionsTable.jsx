import React, { useState } from 'react';

import expenseIcon from '../images/expense-icon.png';
import earningIcon from '../images/earning-icon.png';
import NoTransaction from './NoTransaction';

const UserTransactionsTable = ({ transactions }) => {
    console.log("transactions data", transactions)
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { label: "All", value: "all" },
        { label: "Earnings", value: "earning" },
        { label: "Expenses", value: "expense" }
    ];

    const filterTransactions = () => {
        const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
        if (activeTab === "all") return sorted;
        return sorted.filter(t => t.type === activeTab);
    };

    const filteredTransactions = filterTransactions();

    return (
        <div className="transactions-container">
            {/* Tabs */}
            <div className="transactions-tab">
                {tabs.map(tab => (
                    <button
                        key={tab.value}
                        className={`tab-btn ${activeTab === tab.value ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            {filteredTransactions.length === 0 ? (
                <NoTransaction /> 
            ) : (
                <div className="transactions-list">
                    {filteredTransactions.map(tx => (
                        <div className="transaction-card" key={tx.transactionId + tx.date}>
                            <div className="transaction-left">
                                <img
                                    src={tx.type === "expense" ? expenseIcon : earningIcon}
                                    alt={`${tx.type} icon`}
                                    className="transaction-icon"
                                />
                                <div>
                                    <h6>{tx.type === "expense" ? "Paid Out" : "Paid In"}</h6>
                                    <p>{new Date(tx.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <h5 className={tx.type === "expense" ? "expense" : "earning"}>
                                {tx.type === "expense" ? `- ₦ ${tx.amount.toLocaleString()}` : `₦ ${tx.amount.toLocaleString()}`}
                            </h5>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserTransactionsTable;
