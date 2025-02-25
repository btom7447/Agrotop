import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import sizeVector from '../images/size-vector.png';
import locationVector from '../images/location-vector.png';

const PropertyCard = ({ data }) => {
    const [isSaved, setIsSaved] = useState(false);

    // Format price with commas
    const formatPrice = (price) => price.toLocaleString();

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

    return (
        <Link to={`/property-details/${data.id}`} className="property-card-link">
            <div className="property-card">
                <div className="property-card-poster">
                    {/* Property Image */}
                    <img src={data.image[0]} alt={data.name} />

                    {/* Save Button */}
                    <button type="button" className="save-button" onClick={handleSaveClick}>
                        <IonIcon icon={isSaved ? heart : heartOutline} className="save-icon" />
                    </button>

                    {/* Market Status Tag */}
                    <div className={`${data.market_status} type-tag`}>
                        <p>For {data.market_status}</p>
                    </div>

                    {/* Size and Price */}
                    <div className="size">
                        <img src={sizeVector} alt="size icon" />
                        <p>{data.size} sqft</p>
                        <h4>NGN {formatPrice(data.price)}</h4>
                    </div>
                </div>

                {/* Property Caption */}
                <div className="property-caption">
                    <h5>{data.name}</h5>
                    <div className="location">
                        <img src={locationVector} alt="location placeholder icon" />
                        <h6>{data.address}</h6>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;