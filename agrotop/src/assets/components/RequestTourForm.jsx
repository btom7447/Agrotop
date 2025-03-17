import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const RequestTourForm = ({ property }) => {
    const [tourType, setTourType] = useState("in-person");
    const [selectedDate, setSelectedDate] = useState("");
    const navigate = useNavigate();

    // Format price and size with commas
    const formatNumber = (value) => {
        if (!value) return "N/A";
        const valueStr = String(value);
        const number = parseFloat(valueStr.replace(/,/g, ""));
        return isNaN(number) ? "N/A" : number.toLocaleString();
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the selected date
        if (!selectedDate) {
            toast.error("Please select a date for the tour.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        // Check if user is logged in
        const token = sessionStorage.getItem("token");
        if (!token) {
            toast.error("You need to be logged in to request a tour.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            navigate("/login");
            return;
        }

        const tourData = {
            listing_id: property.id,
            tour_type: tourType,
            tour_date: selectedDate,
        };

        try {
            // Send the data to the backend
            const response = await fetch(`${baseURL}/tour/request`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(tourData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the tour request.");
            }

            const result = await response.json();
            console.log("Tour request submitted successfully:", result);

            toast.success("Tour request submitted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            console.error("Error submitting tour request:", error);
            toast.error("Failed to submit the tour request. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <form className="request-tour-form" onSubmit={handleSubmit}>
            <div>
                <p style={{ textTransform: "capitalize" }}>{property.market_status} Price</p>
                <h4>NGN {formatNumber(property.price)}</h4>
                <button className="make-payment">Make Payment</button>
            </div>
            <div>
                <h5>Request Land Tour</h5>

                {/* Toggle buttons for tour type */}
                <div className="tour-type-buttons">
                    <button
                        type="button"
                        className={`in-person ${tourType === "in-person" ? "active" : ""}`}
                        onClick={() => setTourType("in-person")}
                    >
                        In person
                    </button>
                    <button
                        type="button"
                        className={`virtual ${tourType === "virtual" ? "active" : ""}`}
                        onClick={() => setTourType("virtual")}
                    >
                        Virtual
                    </button>
                </div>

                {/* Date input */}
                <input
                    type="datetime-local"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    placeholder="Select Date"
                    required
                    className="date-input"
                />
            </div>

            {/* Submit button */}
            <button type="submit" className="submit-btn">
                Request a tour
            </button>
        </form>
    );
};

export default RequestTourForm;