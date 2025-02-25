import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import breadcrumbImage from "../assets/images/breadcrumb-image.png";
import BreadCrumb from "../assets/components/BreadCrumb";
import ListingsFilter from "../assets/components/ListingsFilter";
import ListingCatalog from "../assets/components/ListingCatalog";

const listingsData = [
    {
        id: 1,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "abuja",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "sale",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 2,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "Akwa Ibom",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "sale",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 3,
        name: "3 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "Akwa Ibom",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "lease",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 4,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "sale",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 5,
        name: "1 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "Akwa Ibom",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "sale",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 6,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "abuja",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "lease",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 7,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "oyo",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "sale",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    {
        id: 8,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "Akwa Ibom",
        about: ["lorem ipsum", "lorem ipsum", "lorem ipsum"],
        image: [
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        ],
        price: 1600000,
        size: 700,
        type: "residential land",
        market_status: "lease",
        featured: true,
        property_owner: "Rade Lance LLC",
    },
    // Add more properties...
];

const Listings = () => {
    const location = useLocation();
    const { marketStatus, location: selectedLocation } = location.state || {};

    // Initialize filters with values from HeroFilter (if any)
    const [filters, setFilters] = useState({
        market_status: marketStatus || "",
        location: selectedLocation || "",
        maxPrice: "",
    });

    // Function to handle filter changes
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Normalize location values for comparison
    const normalizeLocation = (location) => {
        return location.toLowerCase().replace(/\s+/g, '-');
    };

    // Filter the listings based on the selected filters
    const filteredListings = listingsData.filter((property) => {
        const normalizedPropertyLocation = normalizeLocation(property.location);
        const normalizedFilterLocation = normalizeLocation(filters.location);

        return (
            (filters.market_status === "" || property.market_status === filters.market_status) &&
            (filters.location === "" || normalizedPropertyLocation === normalizedFilterLocation) &&
            (filters.maxPrice === "" || property.price <= parseInt(filters.maxPrice))
        );
    });

    return (
        <div className="listings-page">
            <BreadCrumb
                image={breadcrumbImage}
                title="Listings"
            />
            <ListingsFilter
                filters={filters}
                onFilterChange={handleFilterChange}
            />
            <ListingCatalog listingsData={filteredListings} />
        </div>
    );
};

export default Listings;