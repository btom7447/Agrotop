import React from "react";
import breadcrumbImage from "../assets/images/breadcrumb-image.png";
import BreadCrumb from "../assets/components/BreadCrumb";

const Listings = () => {
    return (
        <div className="listings-page">
            <BreadCrumb 
                image={breadcrumbImage} 
                title="Listings"  
                // subTitle="2 acres of farmland at Alagbado"
            />
        </div>
    )
};

export default Listings;