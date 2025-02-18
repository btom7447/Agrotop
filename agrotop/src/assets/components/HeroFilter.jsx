import React, { useState } from "react";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const HeroFilter = () => {
    const [landType, setLandType] = useState(null);
    const [location, setLocation] = useState(null);

    const navigate = useNavigate();

    // Fixed options for Land Type and Location
    const landTypeOptions = [
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
        { value: "agricultural", label: "Agricultural" },
    ];

    const locationOptions = [
        { value: "lagos", label: "Lagos" },
        { value: "abuja", label: "Abuja" },
        { value: "port-harcourt", label: "Port Harcourt" },
    ];

    // Handle form submission
    const handleSearch = (e) => {
        e.preventDefault();

        if (!landType || !location) {
            alert("Please select both Land Type and Location.");
            return;
        }

        // Navigate to /properties-listing with selected options
        navigate('/listed-properties', {
            state: {
                filterOptions: {
                    landType: landType.value,
                    location: location.value,
                },
            },
        });

        // Clear form inputs (optional)
        setLandType(null);
        setLocation(null);
    };

    return (
        <div className="hero-search-box">
            <form onSubmit={handleSearch}>
                {/* Land Type Select */}
                <Select
                    classNamePrefix="custom-select"
                    value={landType}
                    onChange={setLandType}
                    options={landTypeOptions}
                    placeholder="Choose Land Type"
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
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default HeroFilter;