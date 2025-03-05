import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import BreadCrumb from "../assets/components/BreadCrumb";
import { IonIcon } from "@ionic/react";
import { chevronBack, heart, heartOutline, shareSocial } from "ionicons/icons";
import PropertyThumbnail from "../assets/components/PropertyThumbnail";
import RequestTourForm from "../assets/components/RequestTourForm";
import CallActionSection from "../assets/components/CallActionSection";
import { BounceLoader } from "react-spinners"; // For loading state

const baseURL = import.meta.env.VITE_API_BASE_URL;

const PropertyDetail = () => {
    const { id } = useParams(); // Get the property ID from the URL
    const navigate = useNavigate();
    const location = useLocation();
    const passedProperty = location.state?.property; 
    const [property, setProperty] = useState(passedProperty || null);
    const [loading, setLoading] = useState(!passedProperty); 
    const [error, setError] = useState(null);
    const [isSaved, setIsSaved] = useState(false); 

    // Initialize isSaved state based on localStorage
    useEffect(() => {
        if (property) {
            const savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
            const isPropertySaved = savedProperties.some((savedProperty) => savedProperty.id === property.id);
            setIsSaved(isPropertySaved);
        }
    }, [property]);

    // Handle save button click
    const handleSaveClick = () => {
        let savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];

        if (isSaved) {
            // Remove the property from saved properties
            savedProperties = savedProperties.filter((savedProperty) => savedProperty.id !== property.id);
        } else {
            // Add the property to saved properties
            savedProperties.push(property);
        }

        // Update localStorage and toggle the saved state
        localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
        setIsSaved(!isSaved);
    };

    // Format price and size with commas
    const formatNumber = (value) => {
        if (!value) return "N/A";
        const valueStr = String(value);
        const number = parseFloat(valueStr.replace(/,/g, ""));

        return isNaN(number) ? "N/A" : number.toLocaleString();
    };

    // Format Date to be readable
    const formatListingDate = (dateString) => {
        const date = new Date(dateString);
    
        // Get the day, month, and year
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' }); // Full month name
        const year = date.getFullYear();
    
        // Add the ordinal suffix to the day
        const ordinalSuffix = getOrdinalSuffix(day);
    
        return `${day}${ordinalSuffix} ${month}, ${year}`;
    };

    // Helper function to get the ordinal suffix (e.g., st, nd, rd, th)
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // 11th, 12th, 13th, etc.
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    };

    // Fetch property details based on the id
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                // Fetch property details from the API
                const response = await fetch(`${baseURL}/listing/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch property details");
                }
                const result = await response.json();

                // Check if the response contains the expected data
                if (!result.data) {
                    throw new Error("Invalid property data");
                }

                // Map the API's `state` key to `location` in the property data
                const mappedProperty = {
                    ...result.data,
                    location: result.data.state, // Map `state` to `location`
                };

                setProperty(mappedProperty); // Set the fetched property data
            } catch (err) {
                setError(err.message); // Set error if something goes wrong
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        // Fetch property only if it wasn't passed via state
        if (!passedProperty) {
            fetchProperty();
        }
    }, [id, passedProperty]);

    // Loading state
    if (loading) {
        return (
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
        );
    }

    // Error state
    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    // If no property is found
    if (!property) {
        return (
            <div className="error-container">
                <p>No property found with the given ID.</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="page">
            <BreadCrumb title="Listings" subTitle={property.name} />
            <div className="property-detail-page">
                <div className="details-header">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <IonIcon icon={chevronBack} />
                        Back
                    </button>
                    <div className="property-caption">
                        <div className="property-title">
                            <h3>{property.name}</h3>
                            <h4>NGN {formatNumber(property.price)}</h4>
                        </div>
                        <div className="share-save">
                            <button type="button" className="share-btn">
                                <IonIcon icon={shareSocial} className="share-icon" />
                                Share
                            </button>
                            <button type="button" className="save-btn" onClick={handleSaveClick}>
                                <IonIcon icon={isSaved ? heart : heartOutline} className="save-icon" />
                                Favorite
                            </button>
                        </div>
                    </div>
                    <p>{property.address}</p>
                </div>
                <PropertyThumbnail property={property} />
                <section className="property-details-tab">
                    <div className="prop stats">
                        <div className="prop-statistics">
                            <div className="stat">
                                <h6>Type</h6>
                                <div>
                                    <p style={{ textTransform: "capitalize" }}>{property.type}</p>
                                </div>
                            </div>
                            <div className="stat">
                                <h6>Total Area</h6>
                                <p>{property.size} sqm</p>
                            </div>
                            <div className="stat">
                                <h6>Market Status</h6>
                                <p style={{ textTransform: "capitalize" }}>For {property.market_status}</p>
                            </div>
                            <div className="stat">
                                <h6>Listing Date</h6>
                                <p>{formatListingDate(property.listing_date)}</p>
                            </div>
                        </div>
                        <div className="about-land">
                            <h4>About this Land</h4>
                            <p>{property.about}</p>
                        </div>
                        <div className="property-owner-detail">
                            <p>Listed by Property Owner</p>
                            <div className="property-owner">
                                <div>
                                    <img src="" alt={property.property_owner} />
                                    <h6>{property.property_owner}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <RequestTourForm property={property} />
                </section>
            </div>
            <CallActionSection />
        </div>
    );
};

export default PropertyDetail;