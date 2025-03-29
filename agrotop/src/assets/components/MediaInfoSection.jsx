import React, { useRef } from 'react';
import { IonIcon } from "@ionic/react";
import { trashBinSharp } from "ionicons/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mediaUploadPlaceholder from '../images/media-upload-placeholder.png';

const MediaInfoSection = ({ images, setImages, onSaveMedia }) => {
    const fileInputRef = useRef(null);

    const handleFiles = (files) => {
        const fileArray = Array.from(files).map((file) => ({
            file,
            preview: URL.createObjectURL(file), // Used for preview
        }));
    
        setImages((prevImages) => [...prevImages, ...fileArray]);
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
        URL.revokeObjectURL(images[index].preview);
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        onSaveMedia(images);
        if (images.length > 0) {
            toast.success("Media Saved!", { position: "top-right", autoClose: 3000 });
        } else {
            toast.warning("No media selected - continuing without images", { position: "top-right", autoClose: 3000 });
        }
    };

    React.useEffect(() => {
        return () => {
            images.forEach(image => URL.revokeObjectURL(image.preview));
        };
    }, [images]);

    return (
        <div className='media-info-section'>
            <h4>Property Media</h4>
            <p>
                Showcase your property's best features with high-quality photos. Upload your media here to create a stunning visual presentation.
            </p>

            <div className="media-input">
                <div className={`image-preview ${images.length === 0 ? 'empty' : ''}`}>
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <img src={image.preview} alt={`Uploaded Preview ${index}`} />
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
                    onClick={handleClick}
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