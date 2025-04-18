import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PropertyCard from "./PropertyCard";

const FeaturedListingsCarousel = ({ featuredProperties }) => {
    return (
        <div className="featured-listings-carousel">
            <Splide
                options={{
                    type: "loop",
                    autoplay: true,
                    interval: 4000, // Auto-scroll every 4 seconds
                    perPage: 4,
                    perMove: 1,
                    gap: "1rem", // Adjust spacing between slides
                    pagination: true,
                    arrows: false,
                    breakpoints: {
                        1024: { perPage: 3 }, // Medium screens: 3 per slide
                        800: { perPage: 2 }, // Tablets: 2 per slide
                        659: { perPage: 1 },
                        480: { perPage: 1 }, // Mobile: 1 per slide
                    },
                }}
            >
                {featuredProperties.map((property, index) => (
                    <SplideSlide key={property.id}>
                        <PropertyCard
                            key={property.id} // Now index is properly defined
                            data={property}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default FeaturedListingsCarousel;