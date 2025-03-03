import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import BreadCrumb from "../assets/components/BreadCrumb";
import { IonIcon } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const PropertyDetail = () => {
    const { id } = useParams(); // Get the id from the URL parameter
    const [property, setProperty] = useState(null);
    const navigate = useNavigate();

    // Fetch property details based on the id
    useEffect(() => {
        // Replace this with your actual data fetching logic
        const fetchProperty = async () => {
            const properties = [
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

            const selectedProperty = properties.find((property) => property.id === parseInt(id));
            setProperty(selectedProperty);
        };

        fetchProperty();
    }, [id]);

    if (!property) {
        return <div>Loading...</div>; // Show a loading state while fetching data
    }

    return (
        <div className="page">
            <BreadCrumb
                title="Listings"
                subTitle={property.name}
            />
            <div className="property-detail-page">
                <div className="details-header">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <IonIcon icon={chevronBack} />
                        Back
                    </button>
                    <div className="property-caption">
                        <div className="property-title">
                            <h3>{property.name}</h3>
                        </div>
                    </div>
                </div>

                <h1>{property.name}</h1>
                <p>{property.address}</p>
                <p>{property.location}</p>
                <p>Price: NGN {property.price.toLocaleString()}</p>
                <p>Size: {property.size} sqft</p>
                <p>Type: {property.type}</p>
                <p>Market Status: {property.market_status}</p>
                <p>Owner: {property.property_owner}</p>
                <div className="property-images">
                    {property.image.map((img, index) => (
                        <img key={index} src={img} alt={`Property ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;