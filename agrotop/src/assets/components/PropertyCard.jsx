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
        setIsSaved(savedProperties.some(property => property.id === data.id)); 
    }, [data.id]); 

    // Handle save button click
    const handleSaveClick = () => {
        let savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];

        if (isSaved) {
            savedProperties = savedProperties.filter(property => property.id !== data.id); 
        } else {
            savedProperties.push(data); 
        }

        // Update localStorage and toggle the saved state
        localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
        setIsSaved(!isSaved);
    };

    // Format price and size with commas
    const formatNumber = (value) => {
        if (!value) return "N/A"; 
        const valueStr = String(value); 
        const number = parseFloat(valueStr.replace(/,/g, '')); 
    
        return isNaN(number) ? "N/A" : number.toLocaleString(); 
    };    

    // Construct the full image URL
    const getImageUrl = (imagePath) => {
        const baseUrl = "https://api.drixel.ng/"; 
        return `${baseUrl}${imagePath}`;
    };

    return (
        <div className="property-card">
            <div className="property-card-poster">
                <Link 
                    to={{
                        pathname: `/property-details/${data.id}`,
                        state: { property: data }
                    }} 
                    className="property-card-link"
                > 
                    <img src={data.images && data.images.length > 0 ? getImageUrl(data.images[0]) : "https://via.placeholder.com/300"} alt={data.name || "Property Image"} />
                </Link>
                    <button type="button" className="save-button" onClick={handleSaveClick}>
                        <IonIcon icon={isSaved ? heart : heartOutline} className="save-icon" />
                    </button>
                    <div className={`${data.market_status.toLowerCase()} type-tag`}>
                        <p>For {data.market_status.toLowerCase()}</p>
                    </div>
                    <div className="size">
                        <img src={sizeVector} alt="size icon" />
                        <p>{formatNumber(data.size)} sqft</p>
                        <h4>NGN {formatNumber(data.price)}</h4> 
                    </div>
                </div>

                <div className="property-caption">
                    <Link 
                        to={{
                            pathname: `/property-details/${data.id}`,
                            state: { property: data }
                        }} 
                        className="property-card-link"
                    > 
                    <h5>{data.name || "Unnamed Property"}</h5> {/* Handle missing name */}
                    <div className="location">
                        <img src={locationVector} alt="location placeholder icon" />
                        <h6>{data.address || "Address not available"}</h6> {/* Handle missing address */}
                    </div>
                    </Link>
                </div>
        </div>
    );
};

export default PropertyCard;