import React from "react";
import overviewImage from "../images/overview-image.png";
import DownloadBrochure from "./DownloadBrochure";

const AboutOverview = () => {
    return (
        <section className="overview-section">
            <div className="overview-poster">
                <img src={overviewImage} alt="Overview Image" />
            </div>
            <div className="overview-caption">
                <h4>Overview</h4>
                <h3>Innovating the Agricultural Real Estate Industry</h3>
                <p>
                    Our journey is fueled by a mission to revolutionize the agricultural landscape, starting with our innovative approach to farm security through farm estate development. By creating well-designed farm estates, we provide a robust solution to the longstanding issues of farm theft and conflicts between herders and farmers that have plagued Nigeria. We believe that a secure farming environment is the foundation of prosperous agriculture.
                </p>
                <p>
                    Our skilled team employs advanced techniques to transform raw farm materials into finished, consumable goods that retain the authenticity of local flavors, while minimizing artificial interventions.
                </p>
                <p>
                    We take pride in embracing innovation without compromising the natural essence of our produce.
                </p>
                <hr />
                <hr />
                <p>Are you just starting out?</p>
                <DownloadBrochure />
            </div>
        </section>
    )
};

export default AboutOverview;