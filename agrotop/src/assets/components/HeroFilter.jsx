import React, { useState } from "react";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import stateAndCities from '../data/states-and-cities.json';

const HeroFilter = () => {
    const [marketStatus, setMarketStatus] = useState(null); 
    const [location, setLocation] = useState(null);

    const navigate = useNavigate();

    // Fixed options for Market Status and Location
    const marketStatusOptions = [
        { value: "lease", label: "Lease" },
        { value: "sale", label: "Sale" },
    ];

    const locationOptions = stateAndCities.map((state) => ({
        value: state.name.toLowerCase().replace(/\s+/g, '-'), // Convert to lowercase and replace spaces with hyphens
        label: state.name, // Display the state name
    }));

    // Handle form submission
    const handleSearch = (e) => {
        e.preventDefault();

        if (!marketStatus || !location) {
            alert("Please select both Market Status and Location.");
            return;
        }

        // Navigate to /listings with selected options
        navigate('/listings', {
            state: {
                marketStatus: marketStatus.value,
                location: location.value,
            },
        });

        // Clear form inputs (optional)
        setMarketStatus(null);
        setLocation(null);
    };

    return (
        <div className="hero-search-box">
            <form onSubmit={handleSearch}>
                {/* Market Status Select */}
                <Select
                    classNamePrefix="custom-select"
                    value={marketStatus}
                    onChange={setMarketStatus}
                    options={marketStatusOptions}
                    placeholder="Choose Market Status"
                />
                {/* Location Select */}
                <Select
                    classNamePrefix="custom-select"
                    value={location}
                    onChange={setLocation}
                    options={locationOptions}
                    placeholder="Choose Location"
                />
                {/* Search Button */}
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
        </div>
    );
};

export default HeroFilter;