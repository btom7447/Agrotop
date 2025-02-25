import React, { useState } from "react";
import Select from "react-select";
import stateAndCities from '../data/states-and-cities.json';

const ListingsFilter = ({ filters, onFilterChange }) => {
    // Temporary state for filter values
    const [tempFilters, setTempFilters] = useState({
        market_status: filters.market_status,
        location: filters.location,
        maxPrice: filters.maxPrice,
    });

    // Handle changes for React Select dropdowns
    const handleSelectChange = (selectedOption, { name }) => {
        setTempFilters({
            ...tempFilters,
            [name]: selectedOption ? selectedOption.value : "",
        });
    };

    // Handle changes for price range input
    const handlePriceChange = (e) => {
        const { value } = e.target;
        setTempFilters({
            ...tempFilters,
            maxPrice: value,
        });
    };

    // Handle search button click
    const handleSearchClick = () => {
        // Normalize the location value for comparison
        const normalizedLocation = tempFilters.location.toLowerCase().replace(/\s+/g, '-');
        onFilterChange({
            ...tempFilters,
            location: normalizedLocation,
        });
    };

    // Generate location options from the JSON file
    const locationOptions = stateAndCities.map((state) => ({
        value: state.name.toLowerCase().replace(/\s+/g, '-'), // Convert to lowercase and replace spaces with hyphens
        label: state.name, // Display the state name
    }));

    // Market status options
    const marketStatusOptions = [
        { value: "lease", label: "Lease" },
        { value: "sale", label: "Sale" },
    ];

    return (
        <div className="listings-filter">
            {/* Market Status Dropdown */}
            <Select
                classNamePrefix="custom-select"
                name="market_status"
                value={marketStatusOptions.find(option => option.value === tempFilters.market_status)}
                onChange={handleSelectChange}
                options={marketStatusOptions}
                placeholder="Select Market Status"
                isClearable
            />

            {/* Location Dropdown */}
            <Select
                classNamePrefix="custom-select"
                name="location"
                value={locationOptions.find(option => option.value === tempFilters.location.toLowerCase().replace(/\s+/g, '-'))}
                onChange={handleSelectChange}
                options={locationOptions}
                placeholder="Select Location"
                isClearable
            />

            {/* Price Range Input */}
            <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={tempFilters.maxPrice}
                onChange={handlePriceChange}
                min="0"
            />

            {/* Search Button */}
            <button
                type="button"
                className="search-button"
                onClick={handleSearchClick}
            >
                Search
            </button>
        </div>
    );
};

export default ListingsFilter;