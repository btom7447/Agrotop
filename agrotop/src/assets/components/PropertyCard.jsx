import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import sizeVector from '../images/size-vector.png';
import locationVector from '../images/location-vector.png';

const PropertyCard = ({ id, image, price, address, name, size, className, type }) => {
    const [isSaved, setIsSaved] = useState(false);

    const formatPrice = (price) => price.toLocaleString();

    useEffect(() => {
        const savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
        setIsSaved(savedProperties.some(property => property.id === id));
    }, [id]);

    const handleSaveClick = () => {
        let savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];

        if (isSaved) {
            savedProperties = savedProperties.filter(property => property.id !== id);
        } else {
            savedProperties.push({ id, image, price, address, name, size, type });
        }

        localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
        setIsSaved(!isSaved);
    };

    return (
        <div className={`${className} property-card`}>
            <div className="property-card-poster">
                <img src={image} alt={name} />
                <button type="button" className="save-button" onClick={handleSaveClick}>
                    <IonIcon icon={isSaved ? heart : heartOutline} className="save-icon" />
                </button>
                <div className={`${type} type-tag`}>
                    <p>For {type}</p>
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