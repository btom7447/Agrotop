import React from 'react';
import Select from 'react-select';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import stateAndCities from '../data/states-and-cities.json';

const BasicInfoSection = ({ formData, handleChange, handleSelectChange, onSaveInfo }) => {
  const marketStatusOptions = [
    { value: "lease", label: "Lease" },
    { value: "sale", label: "Sale" },
  ];

  const propertyTypeOptions = [
    { value: "residential-land", label: "Residential Land" },
    { value: "industrial-land", label: "Industrial Land" },
    { value: "agricultural-land", label: "Agricultural Land" },
  ];

  const locationOptions = stateAndCities.map((state) => ({
    value: state.name.toLowerCase().replace(/\s+/g, '-'),
    label: state.name,
  }));

  // Format the price with commas for display
  const formatNumberForDisplay = (num) => {
    if (!num) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Handle changes for price and area inputs
  const handleNumericChange = (e) => {
    const { name, value } = e.target;
    // Remove commas before updating the state
    const numericValue = value.replace(/,/g, "");
    handleChange({ target: { name, value: numericValue } });
  };

  const handleSave = () => {
    if (formData.name && formData.about && formData.address && formData.state && formData.market_status && formData.type ) {
      onSaveInfo(formData);
      toast.success("Information Saved!", { position: "top-right", autoClose: 3000 });
    } else {
      toast.error("Please fill in all required fields!", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <>
      <h4>Basic Information</h4>

      <div className="col-form-inputs">
        <label>Property Title
          <input 
            type="text" 
            name="name" 
            placeholder="Enter property title"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>Description
          <textarea 
            name="about" 
            placeholder="Enter a detailed description of the property"
            value={formData.about}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>

      <div className="row-form-inputs">
        <label>Market Status
        <Select
          classNamePrefix="custom-select"
          value={marketStatusOptions.find(option => option.value === formData.market_status)}
          onChange={(selected) => handleSelectChange("market_status", selected)}
          options={marketStatusOptions}
          placeholder="Select Market Status"
        />
        </label>

        <label>Property Type
          <Select
            classNamePrefix="custom-select"
            value={propertyTypeOptions.find(option => option.value === formData.type)}
            onChange={(selected) => handleSelectChange("type", selected)}
            options={propertyTypeOptions}
            placeholder="Select Property Type"
          />
        </label>
      </div>

      <div className="row-form-inputs">
        <label>Location
          <Select
            classNamePrefix="custom-select"
            value={locationOptions.find(option => option.value === formData.state)}
            onChange={(selected) => handleSelectChange("state", selected)}
            options={locationOptions}
            placeholder="Select State"
          />
        </label>

        <label>Property Address
          <input 
            type="text" 
            name="address" 
            placeholder="Enter Property Address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="row-form-inputs">
        <label>Price
          <input 
            type="text" 
            name="price" 
            placeholder="Enter Price" 
            value={formatNumberForDisplay(formData.price)} 
            onChange={handleNumericChange}
          />
        </label>

        <label>Area (sqft)
          <input 
            type="text" 
            name="size" 
            placeholder="Enter Total Area"
            value={formatNumberForDisplay(formData.size)} 
            onChange={handleNumericChange}
          />
        </label>
      </div>

      <button type="button" className="save-info" onClick={handleSave}>
        Save Information
      </button>
    </>
  );
};

export default BasicInfoSection;