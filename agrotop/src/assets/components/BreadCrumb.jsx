import React from "react";

const BreadCrumb = ({ image, title, subTitle}) => {
    return (
        <section className="breadcrumb-section">
            <img src={image} alt={title} />
            <h6>{title}{subTitle && ` / ${subTitle}`}</h6>
        </section>
    )
};

export default BreadCrumb;