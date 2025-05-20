import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UpdateListingsForm from '../assets/components/UpdateListingsForm'
import { BounceLoader } from 'react-spinners';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const UserUpdateListings = () => {
    const { state } = useLocation();
    const propertyId = state?.propertyId;
    const [listingData, setListingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    console.log("Property Id", propertyId)
    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch(`${baseURL}/listing/${propertyId}`);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed to fetch listing");
                }

                if (!result.data) {
                    setListingData(null);
                    return;
                }

                const mappedData = {
                    ...result.data,
                    location: result.data.state, // Rename state to location
                };

                setListingData(mappedData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, [propertyId]);

    console.log("Listing Data", listingData)
    return (
        <div className="create-listings-page">
            <h2>Update Listings</h2>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                        height: "20dvh", // or 100vh if you want full-screen
                        width: "100%",
                    }}
                >
                    <BounceLoader size={80} color="#E1841A59" />
                </div>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <UpdateListingsForm listingData={listingData} />
            )}
        </div>
    );
}

export default UserUpdateListings;