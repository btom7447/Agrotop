import React from "react";
import CountUp from "react-countup";

const StatsCount = ({ figure, text }) => {
    // Function to format the number
    const formatNumber = (num) => {
        if (num >= 1_000_000) {
            const millions = num / 1_000_000;
            // Check if the number is a whole number
            return millions % 1 === 0 ? `${millions}M` : `${millions.toFixed(1)}M`;
        } else if (num >= 1_000) {
            const thousands = num / 1_000;
            // Check if the number is a whole number
            return thousands % 1 === 0 ? `${thousands}K` : `${thousands.toFixed(0)}K`;
        } else {
            return num.toString(); // Return the number as is for values less than 1,000
        }
    };

    return (
        <div className="stats-count">
            <h3 className="stats-figure">
                <CountUp
                    end={figure}
                    duration={3}
                    formattingFn={formatNumber} // Use the formatting function
                    separator=","
                />+
            </h3>
            <p className="stats-text">{text}</p>
        </div>
    );
};

export default StatsCount;