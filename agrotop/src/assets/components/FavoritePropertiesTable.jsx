import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { IonIcon } from "@ionic/react";
import { trashBinSharp } from "ionicons/icons";
import NoFavoriteProperty from "./NoFavoriteProperty";
import warningIcon from "../images/warning-icon.png";

const FavoritePropertiesTable = () => {
    const [savedProperties, setSavedProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Load saved properties from local storage
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("savedProperties")) || [];
        setSavedProperties(storedFavorites);
    }, []);

    // Open delete confirmation modal
    const handleDeleteClick = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    // Delete property from local storage and state
    const confirmDelete = () => {
        if (selectedProperty) {
            const updatedProperties = savedProperties.filter((prop) => prop.id !== selectedProperty.id);
            setSavedProperties(updatedProperties);
            localStorage.setItem("savedProperties", JSON.stringify(updatedProperties));
            setIsModalOpen(false);
        }
    };

    return (
        <div className="favorites-container">
            {savedProperties.length === 0 ? (
                <NoFavoriteProperty />
            ) : (
                <table className="favorites-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Date Added</th>
                            <th>Market Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedProperties.map((property) => (
                            <tr key={property.id}>
                                <td className="property-cell"><FavoriteCard property={property} /></td>
                                <td>{property.listing_date}</td>
                                <td>For {property.market_status}</td>
                                <td>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDeleteClick(property)}
                                    >
                                        <IonIcon icon={trashBinSharp} size='20' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Move Dialog outside the table */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent asChild>
                    <div className="modal-overlay">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="modal-content"
                        >
                            <img src={warningIcon} alt="warning icon" />
                            <DialogTitle className="modal-title">Confirm Deletion</DialogTitle>
                            <DialogDescription className="modal-description">
                                Are you sure you want to remove this property from your favorites?
                            </DialogDescription>
                            <div className="modal-buttons">
                                <button className="cancel-button" onClick={() => setIsModalOpen(false)}>
                                    No
                                </button>
                                <button className="confirm-button" onClick={confirmDelete}>
                                    Yes
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default FavoritePropertiesTable;