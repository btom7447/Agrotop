import React from "react";
import BreadCrumb from "../assets/components/BreadCrumb";
import AboutOverview from "../assets/components/AboutOverview";
import AboutStatistics from "../assets/components/AboutStatistics";
import ExploreCompany from "../assets/components/ExploreCompany";
import CallActionSection from "../assets/components/CallActionSection";
import StrategySection from "../assets/components/StrategySection";
import TeamSection from "../assets/components/TeamSection";

const About = () => {
    return (
        <div className="about-us-page">
            <BreadCrumb title="About Us" />
            <AboutOverview />
            <AboutStatistics />
            <ExploreCompany />
            <StrategySection />
            <TeamSection />
            <CallActionSection />
        </div>
    )
};

export default About;