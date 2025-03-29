import React from 'react'
import emptyPlaceholder from '../images/no-listings.png';
import { Link } from 'react-router-dom';

const NoListing = () => {
    return (
        <div className='empty-placeholder'>
            <img src={emptyPlaceholder} alt="No Favorite Property found" />
            <h6>No Properties Listed</h6>
            <Link to='/create-listings'>
                <button type="button">
                    Create Listing
                </button>
            </Link>
        </div>
    )
}

export default NoListing;