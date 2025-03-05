import React from "react";
import { Link } from "react-router-dom";
import breadcrumbImage from "../images/breadcrumb-image.png";

const BreadCrumb = ({ title, subTitle}) => {
    return (
        <section className="breadcrumb-section">
            <img src={breadcrumbImage} alt={title} />
            <h6>
                <Link to="/listings">{title}</Link>
                {subTitle && ` / ${subTitle}`}
            </h6>
        </section>
    )
};

export default BreadCrumb;