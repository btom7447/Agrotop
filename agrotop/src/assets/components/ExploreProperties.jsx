import React, { useEffect, useState } from "react";
import ExplorePropertiesCatalog from "./ExplorePropertiesCatalog";
import { BounceLoader } from "react-spinners"; // Import BounceLoader

const ExploreProperties = () => {
    // State for fetched listings data
    const [listingsData, setListingsData] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    // Function to get 8 random properties from the listings data
    const getRandomProperties = (properties, count) => {
        const shuffled = properties.sort(() => 0.5 - Math.random()); // Shuffle the array
        return shuffled.slice(0, count); // Return the first `count` elements
    };

    // Get 8 random properties
    const randomProperties = getRandomProperties(listingsData, 8);

    // Display error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="explore-properties">
            <h3>Explore Our Properties</h3>
            <p>Look through our catalogue to find 100% verified and trusted properties to bank on</p>
            <hr className="divide" />

            {/* Show loader if loading */}
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
                <ExplorePropertiesCatalog exploreProperties={randomProperties} />
            )}
        </section>
    );
};

export default ExploreProperties;