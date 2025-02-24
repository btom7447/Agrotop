import React, { useState } from "react";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import stateAndCities from '../data/states-and-cities.json';

const HeroFilter = () => {
    const [landType, setLandType] = useState(null);
    const [location, setLocation] = useState(null);

    const navigate = useNavigate();

    // Fixed options for Land Type and Location
    const landTypeOptions = [
        { value: "lease", label: "Lease" },
        { value: "sale", label: "Sale" },
    ];

    const locationOptions = stateAndCities.map((state) => ({
        value: state.name.toLowerCase().replace(/\s+/g, '-'), 
        label: state.name, 
    }));
    ;

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