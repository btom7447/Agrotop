import React, { useState } from "react";

const RequestTourForm = ({ property }) => {
    const [tourType, setTourType] = useState("in-person"); // Default to in-person
    const [selectedDate, setSelectedDate] = useState("");

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
            alert("Please select a date for the tour.");
            return;
        }

        // Prepare the data to send to the backend
        const tourData = {
            propertyId,
            tourType,
            date: selectedDate,
        };

        try {
            // Send the data to the backend
            const response = await fetch("https://your-backend-api.com/request-tour", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tourData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the tour request.");
            }

            const result = await response.json();
            console.log("Tour request submitted successfully:", result);
            alert("Tour request submitted successfully!");
        } catch (error) {
            console.error("Error submitting tour request:", error);
            alert("Failed to submit the tour request. Please try again.");
        }
    };

    return (
        <form className="request-tour-form" onSubmit={handleSubmit}>
            <div>
                <p style={{ textTransform: 'capitalize'} }>{property.market_status} Price</p>
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
            <button type="submit" className="submit-btn">Request a tour</button>
        </form>
    );
};

export default RequestTourForm;