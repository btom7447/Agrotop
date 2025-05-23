import React, { useState } from "react";
import NoListing from "./NoListing";
import { BounceLoader } from "react-spinners";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

const DashboardListedProperty = ({ listingsData, loading, error }) => {
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

    if (!listingsData || listingsData.length === 0) {
        return <NoListing />;
    }

    // Calculate total pages
    const totalRows = listingsData.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Get data for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = listingsData.slice(startIndex, endIndex);

    return (
        <div className="favorites-container">
            <table className="listings-table">
                <thead>
                    <tr>
                        <th>Property Name</th>
                        <th>Location</th>
                        <th>Market Status</th>
                        <th>Price</th>
                        <th>Listing Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((property) => (
                        <tr key={property.id}>
                            <td>{property.name}</td>
                            <td>{property.state}</td>
                            <td>For {property.market_status}</td>
                            <td>₦ {parseInt(property.price, 10).toLocaleString()}</td>
                            <td>{property.listing_date}</td>
                            <td>
                                <span
                                    className={`status ${
                                        property.sales_status === "pending"
                                            ? "pending"
                                            : property.sales_status === "approved"
                                            ? "approved"
                                            : ""
                                    }`}
                                >
                                    {property.sales_status}
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

export default DashboardListedProperty;