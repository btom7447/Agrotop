import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../assets/components/BreadCrumb";
import ListingsFilter from "../assets/components/ListingsFilter";
import ListingCatalog from "../assets/components/ListingCatalog";
import { BounceLoader } from "react-spinners"; // Import BounceLoader

const Listings = () => {
    const location = useLocation();
    const { marketStatus, location: selectedLocation } = location.state || {};

    // State for fetched listings data
    const [listingsData, setListingsData] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initialize filters with values from HeroFilter (if any)
    const [filters, setFilters] = useState({
        market_status: marketStatus || "",
        location: selectedLocation || "",
        maxPrice: "",
    });

    // Fetch data from the API
    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch("https://api.drixel.ng/api/listing");
                if (!response.ok) {
                    throw new Error("Failed to fetch listings");
                }
                const result = await response.json();

                // Extract the `data` array from the API response
                const { data } = result;
                if (!Array.isArray(data)) {
                    throw new Error("API response is not an array");
                }

                // Map the API's `state` key to `location` in the listings data
                const mappedData = data.map((property) => ({
                    ...property,
                    location: property.state, // Map `state` to `location`
                }));

                setListingsData(mappedData); // Set the mapped data
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    // Function to handle filter changes
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Normalize location values for comparison
    const normalizeLocation = (location) => {
        return location.toLowerCase().replace(/\s+/g, '-');
    };

    // Filter the listings based on the selected filters
    const filteredListings = listingsData.filter((property) => {
        const normalizedPropertyLocation = normalizeLocation(property.location || "");
        const normalizedFilterLocation = normalizeLocation(filters.location || "");

        // Normalize market_status for case-insensitive comparison
        const normalizedPropertyMarketStatus = property.market_status?.toLowerCase() || "";
        const normalizedFilterMarketStatus = filters.market_status?.toLowerCase() || "";

        // Convert price to a number for comparison
        const propertyPrice = parseFloat(property.price.replace(/,/g, '')); // Remove commas and convert to number
        const filterMaxPrice = parseFloat(filters.maxPrice.replace(/,/g, '')); // Remove commas and convert to number

        return (
            (filters.market_status === "" || normalizedPropertyMarketStatus === normalizedFilterMarketStatus) &&
            (filters.location === "" || normalizedPropertyLocation === normalizedFilterLocation) &&
            (filters.maxPrice === "" || propertyPrice <= filterMaxPrice)
        );
    });

    // Display error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="listings-page">
            <BreadCrumb title="Listings" />

            {/* Show loader after BreadCrumb if loading */}
            {loading ? (
                <div
                    className="loading-container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                >
                    <BounceLoader size={80} color="#E1841A59" /> {/* BounceLoader for loading state */}
                </div>
            ) : (
                <>
                    {/* ListingsFilter is displayed after loading */}
                    <ListingsFilter filters={filters} onFilterChange={handleFilterChange} />

                    {/* Display no-property fallback if no listings are found */}
                    {filteredListings.length === 0 ? (
                        <div
                            className="no-products"
                            style={{
                                width: "100%",
                                height: "30dvh",
                                textAlign: "center",
                                fontSize: "1.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p>No properties found</p> {/* Fallback for no properties */}
                        </div>
                    ) : (
                        <ListingCatalog listingsData={filteredListings} />
                    )}
                </>
            )}
        </div>
    );
};

export default Listings;