import React from "react";
import FeaturedListingsCarousel from "./FeaturedListingsCarousel";

const featuredProperties = [
    {
        id: 1, 
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 2, 
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "sale"
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "sale"
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 7,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 8,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "sale"
    },
    {
        id: 9,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 10,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "sale"
    },
    {
        id: 11,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 12, 
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 13,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "lease"
    },
    {
        id: 14,
        image: "https://img.freepik.com/free-photo/view-african-nature-scenery-with-vegetation_23-2148851595.jpg?ga=GA1.1.631888845.1739954325&semt=ais_hybrid",
        price: 1600000,
        address: "26 Oba Adebayo Esstate, Lagelu",
        name: "2 Acres of farmland",
        size: "1200 sqft",
        type: "sale"
    },
    
];

const FeaturedListingsSection = ( ) => {
    return (
        <section className="explore-properties">
            <h3>Featured Listings</h3>
            <p>Look through our catalogue to find 100% verified and trusted properties to bank on</p>
            <hr className="divide" />
            <FeaturedListingsCarousel featuredProperties={featuredProperties} />
        </section>
    )
};

export default FeaturedListingsSection;