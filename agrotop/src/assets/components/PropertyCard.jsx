import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import sizeVector from '../images/size-vector.png';
import locationVector from '../images/location-vector.png';

const PropertyCard = ({ data }) => {
    const [isSaved, setIsSaved] = useState(false);

    // Check if the property is already saved when the component mounts
    useEffect(() => {
        const savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
        setIsSaved(savedProperties.some(property => property.id === data.id)); // Use data.id
    }, [data.id]); // Add data.id as a dependency

    // Handle save button click
    const handleSaveClick = () => {
        let savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];

        if (isSaved) {
            // Remove the property from saved properties
            savedProperties = savedProperties.filter(property => property.id !== data.id); // Use data.id
        } else {
            // Add the property to saved properties
            savedProperties.push(data); // Push the entire data object
        }

        // Update localStorage and toggle the saved state
        localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
        setIsSaved(!isSaved);
    };

    // Format price and size with commas
    const formatNumber = (value) => {
        if (!value) return "N/A"; // Handle missing or invalid values
    
        // Ensure the value is a string before calling replace
        const valueStr = String(value); 
    
        // Convert to a number
        const number = parseFloat(valueStr.replace(/,/g, '')); 
    
        return isNaN(number) ? "N/A" : number.toLocaleString(); // Format with commas
    };    

    // Construct the full image URL
    const getImageUrl = (imagePath) => {
        const baseUrl = "https://api.drixel.ng/"; // Replace with your server's base URL
        return `${baseUrl}${imagePath}`;
    };

    return (
        <div className="property-card">
            <div className="property-card-poster">
                {/* Property Image */}
                <img src={data.images && data.images.length > 0 ? getImageUrl(data.images[0]) : "https://via.placeholder.com/300"} alt={data.name || "Property Image"} />

                {/* Save Button */}
                <button type="button" className="save-button" onClick={handleSaveClick}>
                    <IonIcon icon={isSaved ? heart : heartOutline} className="save-icon" />
                </button>

                {/* Market Status Tag */}
                <div className={`${data.market_status.toLowerCase()} type-tag`}>
                    <p>For {data.market_status.toLowerCase()}</p>
                </div>

                {/* Size and Price */}
                <div className="size">
                    <img src={sizeVector} alt="size icon" />
                    <p>{formatNumber(data.size)} sqft</p> {/* Format size */}
                    <h4>NGN {formatNumber(data.price)}</h4> {/* Format price */}
                </div>
            </div>

            {/* Property Caption */}
            <Link to={`/property-details/${data.id}`} className="property-card-link">
                <div className="property-caption">
                    <h5>{data.name || "Unnamed Property"}</h5> {/* Handle missing name */}
                    <div className="location">
                        <img src={locationVector} alt="location placeholder icon" />
                        <h6>{data.address || "Address not available"}</h6> {/* Handle missing address */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PropertyCard;