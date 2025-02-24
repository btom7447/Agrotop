import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

const ExplorePropertiesCatalog = ({ exploreProperties }) => {
    const navigate = useNavigate();
    const propertiesToShow = exploreProperties.slice(0, 8); // Show only first 8 properties

    // Stagger Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay each child animation by 0.2s
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <div className="explore-properties-catalog">
            {/* Grid of PropertyCards */}
            <motion.div
                className="properties-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show" // Triggers animation when in view
                viewport={{ once: true, amount: 0.4 }} // Only runs once, triggers at 20% visibility
            >
                {propertiesToShow.map((property, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <PropertyCard
                            image={property.image}
                            price={property.price}
                            address={property.address}
                            name={property.name}
                            size={property.size}
                            type={property.type}
                            id={property.id}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Explore More Button */}
            <div className="explore-more-container">
                <button className="explore-more" onClick={() => navigate("/listings")}>
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default ExplorePropertiesCatalog;