import React from 'react'
import emptyPlaceholder from '../images/fav-empty-placeholder.png';

const NoFavoriteProperty = () => {
    return (
        <div className='empty-placeholder'>
            <img src={emptyPlaceholder} alt="No Favorite Property found" />
            <h6>No Favorite Property</h6>
            <p>Every property you favorite will appear here</p>
        </div>
    )
}

export default NoFavoriteProperty