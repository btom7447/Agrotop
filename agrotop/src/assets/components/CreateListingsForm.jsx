import React, { useState } from 'react';
import BasicInfoSection from './BasicInfoSection';
import MediaInfoSection from './MediaInfoSection';

const CreateListingsForm = () => {
    const initialFormData = {
        propertyTitle: "",
        propertyDescription: "",
        marketStatus: null,
        propertyType: null,
        location: null,
        propertyAddress: "",
        price: "",
        area: "",
        images: [], // Now part of the form data
    };

    const [formData, setFormData] = useState(initialFormData);

    // Handle input changes for text fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle dropdown selections
    const handleSelectChange = (name, selectedOption) => {
        setFormData({ ...formData, [name]: selectedOption });
    };

    // Save basic info section data
    const handleSaveInfo = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
    };

    // Save media (images)
    const handleSaveMedia = (uploadedImages) => {
        setFormData((prevData) => ({ ...prevData, images: uploadedImages }));
    };

    // Reset form data on cancel
    const handleCancel = () => {
        setFormData(initialFormData);
    };

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = new FormData();

        // Append text fields
        for (const key in formData) {
            if (key !== "images") {
                submissionData.append(key, formData[key]);
            }
        }

        // Append images as files
        formData.images.forEach((image, index) => {
            submissionData.append(`images[${index}]`, image);
        });

        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                body: submissionData,
            });

            if (!response.ok) throw new Error("Failed to submit listing");

            console.log("Listing submitted successfully!");
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-listings-form">
            <BasicInfoSection 
                formData={formData} 
                handleChange={handleChange} 
                handleSelectChange={handleSelectChange} 
                onSaveInfo={handleSaveInfo} 
            />

            <MediaInfoSection onSaveMedia={handleSaveMedia} />

            <div className="form-buttons">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                    Cancel
                </button>
                <button type="submit" className="publish-btn">
                    Publish
                </button>
            </div>
        </form>
    );
};

export default CreateListingsForm;
