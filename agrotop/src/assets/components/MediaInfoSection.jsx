import React, { useState, useRef } from 'react';
import { IonIcon } from "@ionic/react";
import { trashBinSharp } from "ionicons/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mediaUploadPlaceholder from '../images/media-upload-placeholder.png';

const MediaInfoSection = ({ onSaveMedia }) => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null); // Reference to the file input

    const handleFiles = (files) => {
        const fileArray = Array.from(files).map(file => {
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(fileArray).then(results => {
            setImages(prevImages => [...prevImages, ...results]);
        });
    };

    const handleDrop = (event) => {
        event.preventDefault();
        handleFiles(event.dataTransfer.files);
    };

    const handleFileChange = (event) => {
        handleFiles(event.target.files);
    };

    const handleClick = () => {
        fileInputRef.current.click(); 
    };

    const handleDelete = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        if (images.length > 0) {
            onSaveMedia(images);
            toast.success("Media Saved!", { position: "top-right", autoClose: 3000 });
        } else {
            toast.error("No media selected!", { position: "top-right", autoClose: 3000 });
        }
    };

    return (
        <div className='media-info-section'>
            <h4>Property Media</h4>
            <p>
                Showcase your property's best features with high-quality photos. Upload your media here to create a stunning visual presentation.
            </p>

            <div className="media-input">
                <div className={`image-preview ${images.length === 0 ? 'empty' : ''}`}>
                    {images.map((src, index) => (
                        <div key={index} className="image-container">
                            <img src={src} alt={`Uploaded Preview ${index}`} />
                            <button onClick={() => handleDelete(index)} className="delete-button">
                                <IonIcon icon={trashBinSharp} size='20' />
                            </button>
                        </div>
                    ))}
                </div>
                <div 
                    className="dropzone" 
                    onDrop={handleDrop} 
                    onDragOver={(e) => e.preventDefault()}
                    onClick={handleClick} // Trigger file input on click
                >
                    <img src={mediaUploadPlaceholder} alt="upload icon" />
                    <p>Drag and drop images here, or Upload images</p>
                    <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        ref={fileInputRef} 
                        style={{ display: 'none' }}
                    />
                </div>

                <button type="button" className="save-info" onClick={handleSave}>
                    Save Media
                </button>
            </div>
        </div>
    );
};

export default MediaInfoSection;
