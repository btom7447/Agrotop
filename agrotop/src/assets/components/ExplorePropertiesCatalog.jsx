import React from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const ExplorePropertiesCatalog = ({ exploreProperties }) => {
    const navigate = useNavigate();
    const propertiesToShow = exploreProperties.slice(0, 8); // Show only first 8 properties

    return (
        <div className="explore-properties-catalog">
            {/* Grid of PropertyCards */}
            <div className="properties-grid">
                {propertiesToShow.map((property, index) => (
                    <PropertyCard
                        key={index}
                        image={property.image}
                        price={property.price}
                        address={property.address}
                        name={property.name}
                        size={property.size}
                        type={property.type}
                    />
                ))}
            </div>

            {/* Explore More Button */}
            <div className="explore-more-container">
                <button className="explore-more" onClick={() => navigate("/listingS")}>Explore   More</button>
            </div>
        </div>
    );
};

export default ExplorePropertiesCatalog;