import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import BreadCrumb from "../assets/components/BreadCrumb";
import { IonIcon } from "@ionic/react";
import { chevronBack, heart, heartOutline, shareSocial } from "ionicons/icons";
import PropertyThumbnail from "../assets/components/PropertyThumbnail";
import statVector from "../assets/images/stat-vector.png"
import RequestTourForm from "../assets/components/RequestTourForm";
import CallActionSection from "../assets/components/CallActionSection";

const PropertyDetail = () => {
    const { id } = useParams(); // Get the property ID from the URL
    const navigate = useNavigate();
    const location = useLocation();
    const passedProperty = location.state?.property;
    const [property, setProperty] = useState(passedProperty || null);
    const [loading, setLoading] = useState(!passedProperty); // Add a loading state
    const [error, setError] = useState(null); // Add an error state
    const [isSaved, setIsSaved] = useState(false); // Track if the property is saved

    console.log("id", id);
    console.log("passed data", passedProperty);

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

    // Fetch property details based on the id
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                // Replace this with your actual data fetching logic
                const properties = [
                    {
                        id: 21,
                        name: "2 acres of farmland at Alagbado",
                        address: "26 Oba Adebayo Estate, Lagelu",
                        location: "abuja",
                        about: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        image: [
                            "https://img.freepik.com/free-photo/village-view-from_1385-478.jpg?uid=R107376497&ga=GA1.1.136804308.1741017342&semt=ais_hybrid",
                            "https://img.freepik.com/free-photo/city-sunset_1127-4033.jpg?uid=R107376497&ga=GA1.1.136804308.1741017342&semt=ais_hybrid",
                            "https://img.freepik.com/free-photo/aerial-view-beautiful-village-surrounded-by-nature_1268-15591.jpg?uid=R107376497&ga=GA1.1.136804308.1741017342&semt=ais_hybrid",
                            "https://img.freepik.com/free-photo/hotel_1127-4035.jpg?uid=R107376497&ga=GA1.1.136804308.1741017342&semt=ais_hybrid"
                        ],
                        price: "1600000",
                        size: 700,
                        type: "residential land",
                        market_status: "sale",
                        featured: true,
                        property_owner: "Rade Lance LLC",
                        listing_date: "2022-04-14"
                    },
                ];

                const selectedProperty = properties.find((property) => property.id === parseInt(id));

                if (selectedProperty) {
                    setProperty(selectedProperty);
                } else {
                    setError("Property not found"); // Set error if property is not found
                }
            } catch (err) {
                setError("Failed to fetch property details"); // Handle any other errors
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        if (!passedProperty) {
            fetchProperty();
        }
    }, [id, passedProperty]);

    // Loading state
    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading...</p>
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
                                    <p style={{ textTransform: 'capitalize' }}>{property.type}</p>
                                </div>
                            </div>
                            <div className="stat">
                                <h6>Total Area</h6>
                                <div>
                                    <img src={statVector} alt="size vector icon" />
                                    <p>{property.size} sqm</p>
                                </div>
                            </div>
                            <div className="stat">
                                <h6>Market Status</h6>
                                <div>
                                    <img src={statVector} alt="size vector icon" />
                                    <p style={{ textTransform: 'capitalize' }}>For {property.market_status}</p>
                                </div>
                            </div>
                            <div className="stat">
                                <h6>Listing Date</h6>
                                <div>
                                    <img src={statVector} alt="size vector icon" />
                                    <p>{property.listing_date}</p>
                                </div>
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

                                <button type="button" className="more-info">
                                    More info
                                </button>
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