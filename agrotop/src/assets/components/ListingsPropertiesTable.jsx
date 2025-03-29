import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { IonIcon } from "@ionic/react";
import { createOutline, trashBinSharp } from "ionicons/icons";
import NoListing from "./NoListing";
import warningIcon from "../images/warning-icon.png";
import { BounceLoader } from "react-spinners";
import FavoriteCard from "./FavoriteCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const ListingsPropertiesTable = () => {
    const [listingsData, setListingsData] = useState([]); 
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    let userData;
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error("Error parsing user data:", error);
        userData = null;
    }

    // Load listed properties from server
    useEffect(() => {
        const fetchListings = async () => {
            if (!userData?.id) {
                setLoading(false);
                return;
            }
    
            try {
                const response = await fetch(`${baseURL}/listing/user/${userData.id}`);
                const result = await response.json();
    
                if (!response.ok) {
                    throw new Error(result.message || "Failed to fetch listings");
                }
    
                // Check if the response contains "No listings found for this user"
                if (result.message === "No listings found for this user") {
                    setListingsData([]);  // Set empty array to trigger <NoListing />
                    return;
                }
    
                if (!Array.isArray(result.data)) {
                    setListingsData([]);
                    return;
                }
    
                const mappedData = result.data.map((property) => ({
                    ...property,
                    location: property.state, // Rename state to location
                }));
    
                setListingsData(mappedData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchListings();
    }, [userData?.id]);    
    
    // Open delete confirmation modal
    const handleDeleteClick = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    // Delete property from local storage and state
    const confirmDelete = async () => {
        if (!selectedProperty) return;
    
        try {
            const response = await fetch(`${baseURL}/listing/${selectedProperty.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error("Failed to delete the listing from the server");
            }
    
            // Remove from state (listingsData)
            setListingsData((prevListings) => prevListings.filter((prop) => prop.id !== selectedProperty.id));
    
            // Show success toast
            toast.success("Listing deleted successfully!", { position: "top-right", autoClose: 3000 });
    
        } catch (error) {
            console.error("Error deleting listing:", error);
    
            // Show error toast
            toast.error("Error deleting the listing. Please try again.", { position: "top-right", autoClose: 3000 });
    
        } finally {
            setIsModalOpen(false);
        }
    };
    
    if (loading) return (
        <div style={{ marginTop: '50px'}}>
            <BounceLoader size={80} color="#E1841A59"  />
        </div>
    );
    // if (error) return <p>Error: {error}</p>;
    
    return (
        <div className="favorites-container">
            {listingsData.length === 0 ? (
                <NoListing />
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
                        {listingsData.map((property) => (
                            <tr key={property.id}>
                                <td className="property-cell">
                                    <FavoriteCard property={property} />
                                </td>
                                <td>{property.listing_date}</td>
                                <td>For {property.market_status}</td>
                                <td>
                                    <button 
                                        type="button"
                                        className="edit-button"
                                        onClick={() => console.log("Edit clicked for:", property)}
                                    >
                                        <IonIcon icon={createOutline} size="20" />
                                    </button>
                                    <button 
                                        className="delete-button" 
                                        onClick={() => handleDeleteClick(property)}
                                    >
                                        <IonIcon icon={trashBinSharp} size="20" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Delete Confirmation Modal */}
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

export default ListingsPropertiesTable;
