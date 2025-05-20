import React from 'react'
import locationPlaceholder from '../images/location-placeholder-red.png';

const FavoriteCard = ({ property }) => {

    // Construct the full image URL
    // const getImageUrl = (imagePath) => {
    //     const baseUrl = "https://api.drixel.ng/"; 
    //     return `${baseUrl}${imagePath}`;
    // };

    return (
        <div className='favorite-card'>
            <img src={property.images ? property.images[0] : locationPlaceholder} alt={property.name || "Property Image"} className='favorite-card-image' />
            <div>
                <h5>{property.name}</h5>
                <div className='location'>
                    <img src={locationPlaceholder} alt="Location placeholder icon" />
                    <h6>{property.address}</h6>
                </div>
                <p>{property.price}</p>
            </div>
        </div>
    )
}

export default FavoriteCard