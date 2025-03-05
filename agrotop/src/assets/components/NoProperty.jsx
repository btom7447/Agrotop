import React from "react";
import emptyPlaceholder from '../images/empty-placeholder.png';

const NoProperty = () => {
    return (
        <div className="no-property">
            <h6>Search criteria not found. Kindly try another criteria</h6>
            <img src={emptyPlaceholder} alt="No property found" />
        </div>
    )
};

export default NoProperty;