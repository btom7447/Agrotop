import React from "react";
import FeaturedListingsCarousel from "./FeaturedListingsCarousel";

const featuredProperties = [
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
        location: "lagos",
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
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "akwa ibom",
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
        id: 5,
        name: "2 acres of farmland at Alagbado",
        address: "26 Oba Adebayo Estate, Lagelu",
        location: "akwa ibom",
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
        location: "lagos",
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