import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { IonIcon } from '@ionic/react'; 
import { chevronBack, chevronForward } from 'ionicons/icons'; 

const ListingCatalog = ({ listingsData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 16; // Number of properties to display per page

    // Calculate the total number of pages
    const totalPages = Math.ceil(listingsData.length / propertiesPerPage);

    // Get the properties for the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = listingsData.slice(indexOfFirstProperty, indexOfLastProperty);

    // Calculate the range of page numbers to display
    const getPageNumbers = () => {
        const maxPagesToShow = 5; // Number of page numbers to display at a time
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    // Handle pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="listing-catalog">
            {/* Grid of PropertyCards */}
            <div className="properties-grid">
                {currentProperties.map((property, index) => (
                    <PropertyCard
                        key={property.id}
                        data={property}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button
                    className="next-previous"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    <IonIcon icon={chevronBack} />
                </button>

                {/* Display page numbers */}
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? "active" : "page-number"}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className="next-previous"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <IonIcon icon={chevronForward} />
                </button>
            </div>
        </div>
    );
};

export default ListingCatalog;