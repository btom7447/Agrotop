import React from "react";
import breadcrumbImage from "../images/breadcrumb-image.png";

const BreadCrumb = ({ title, subTitle}) => {
    return (
        <section className="breadcrumb-section">
            <img src={breadcrumbImage} alt={title} />
            <h6>{title}{subTitle && ` / ${subTitle}`}</h6>
        </section>
    )
};

export default BreadCrumb;