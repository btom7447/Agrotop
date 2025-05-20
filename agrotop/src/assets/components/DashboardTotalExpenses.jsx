import React, { useState } from "react";
import { BounceLoader } from "react-spinners";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import NoAmount from "./NoAmount";

const DashboardTotalExpenses = ({ expenseTransactions, loading, error }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    if (loading)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20dvh", // or 100vh if you want full-screen
                    width: "100%",
                }}
            >
                <BounceLoader size={80} color="#E1841A59" />
            </div>
        );

    // if (error) return <p>Error: {error}</p>;

    if (!expenseTransactions || expenseTransactions.length === 0) {
        return <NoAmount text="Expense" />;
    }

    // Calculate total pages
    const totalRows = expenseTransactions.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Get data for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = expenseTransactions.slice(startIndex, endIndex);

    return (
        <div className="favorites-container">
            <table className="listings-table">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((transact) => (
                        <tr key={transact.id}>
                            <td>{transact.transaction_id}</td>
                            <td>{transact.date}</td>
                            <td>₦ {parseInt(transact.amount, 10).toLocaleString()}</td>
                            <td>
                                <span
                                    className={`status ${
                                        transact.status === "pending"
                                            ? "pending"
                                            : transact.status === "confirmed"
                                            ? "approved"
                                            : ""
                                    }`}
                                >
                                    {transact.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination-container">
                <span>
                    Rows per page 
                </span>
                <span>
                    {rowsPerPage}  
                </span>
                <span>
                    {startIndex + 1} - {Math.min(endIndex, totalRows)} of {totalRows}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <IonIcon icon={chevronBack} />
                </button>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    <IonIcon icon={chevronForward} />
                </button>
            </div>
        </div>
    );
};

export default DashboardTotalExpenses;