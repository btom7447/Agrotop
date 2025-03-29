import React, { useState } from 'react';
import BasicInfoSection from './BasicInfoSection';
import MediaInfoSection from './MediaInfoSection';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const CreateListingsForm = () => {
    let userData;
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error("Error parsing user data:", error);
        userData = null;
    }

    const initialFormData = {
        name: "",
        about: "",
        market_status: null,
        type: null,
        state: null,
        featured: null,
        address: "",
        price: "",
        size: "",
        user_id: userData?.id || "",
        property_owner: userData?.name || "",
        listing_date: new Date().toISOString().split('T')[0],
        images: [], 
    };

    const [formData, setFormData] = useState(initialFormData);
    const [images, setImages] = useState([]); // Keep images state in parent for preview

    // Handle input changes for text fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle dropdown selections
    const handleSelectChange = (name, selectedOption) => {
        setFormData({ ...formData, [name]: selectedOption?.value || "" });
    };

    // Save basic info section data
    const handleSaveInfo = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
    };

    // Save media (images) - modified to use Base64
    const handleSaveMedia = (uploadedImages) => {
        setImages(uploadedImages); // Store images in state for preview
    
        setFormData((prevData) => ({
            ...prevData,
            images: uploadedImages.map(img => img.file), // Store files, not Base64
        }));
    };    

    // Submit form data - modified to include Base64 images
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        
        // Append text data
        Object.keys(formData).forEach((key) => {
            if (key !== "images") {
                formDataToSend.append(key, formData[key]);
            }
        });
    
        // Append image files
        images.forEach((img, index) => {
            formDataToSend.append(`images[]`, img.file);
        });        
    
        try {
            const response = await fetch(`${baseURL}/listing`, {
                method: "POST",
                body: formDataToSend, 
                headers: {
                    "Accept": "application/json",
                },
            });
    
            if (!response.ok) throw new Error("Failed to submit listing");
    
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

            <MediaInfoSection 
                images={images} 
                setImages={setImages} 
                onSaveMedia={handleSaveMedia} 
            />

            <div className="form-buttons">
                <button type="button" className="cancel-btn" onClick={() => setFormData(initialFormData)}>
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