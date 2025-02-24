import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import sizeVector from '../images/size-vector.png';
import locationVector from '../images/location-vector.png';

const PropertyCard = ({ image, price, address, name, size, className, type }) => {
    // State to track if the property is saved
    const [isSaved, setIsSaved] = useState(false);

    // Function to format the price
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // Check if the property is already saved when the component mounts
    useEffect(() => {
        const savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
        const isPropertySaved = savedProperties.some((property) => property.name === name);
        setIsSaved(isPropertySaved);
    }, [name]);

    // Function to handle the save button click
    const handleSaveClick = () => {
        // Get the existing saved properties from localStorage
        const savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];

        // Check if the property already exists in savedProperties
        const propertyIndex = savedProperties.findIndex(
            (property) => property.name === name
        );

        if (propertyIndex === -1) {
            // Property does not exist, so add it
            const property = { image, price, address, name, size };
            savedProperties.push(property);
            setIsSaved(true); // Update state to indicate the property is saved
        } else {
            // Property exists, so remove it
            savedProperties.splice(propertyIndex, 1);
            setIsSaved(false); // Update state to indicate the property is unsaved
        }

        // Save the updated list back to localStorage
        localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
        console.log(localStorage.getItem("savedProperties"));
    
    };

    return (
        <div className={`${className} property-card`}>
            <div className="property-card-poster">
                <img src={image} alt={name} />  
                <button type="button" className="save-button" onClick={handleSaveClick}>
                    <IonIcon icon={isSaved ? heart : heartOutline} className="save-icon" />
                </button>
                <div className={`${type} type-tag`}>
                    <p>For  {type}</p>
                </div>
                <div className="size">
                    <img src={sizeVector} alt="size icon" />
                    <p>{size}</p>
                    <h4>NGN {formatPrice(price)}</h4>
                </div>
            </div>
            <div className="property-caption">
                <h5>{name}</h5>
                <div className="location">
                    <img src={locationVector} alt="location placeholder icon" />
                    <h6>{address}</h6>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;