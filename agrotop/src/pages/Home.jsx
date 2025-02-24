import React from "react";
import HeroSection from "../assets/components/HeroSection";
import HeroBuySell from "../assets/components/HeroBuySell";
import TestimonialSection from "../assets/components/TestimonialSection";
import StandOutSection from "../assets/components/StandOutSection";
import CallActionSection from "../assets/components/CallActionSection";
import ExploreProperties from "../assets/components/ExploreProperties";
import FeaturedListingsSection from "../assets/components/FeaturedListingsSection";

const Home = () => {
    return (
        <>
            <div className="home-page">
                <HeroSection />
                <ExploreProperties />
                <HeroBuySell />
                <FeaturedListingsSection />
                <StandOutSection />
                <TestimonialSection />
                <CallActionSection />
            </div>
        </>
    )
};

export default Home;