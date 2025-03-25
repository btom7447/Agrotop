import React from 'react'
import FavoritePropertiesTable from '../assets/components/FavoritePropertiesTable'

const UserFavoriteListings = () => {
    return (
        <div className="user-favorite-page">
            <h2>My Favorites</h2>
            <FavoritePropertiesTable />
        </div>
    )
}

export default UserFavoriteListings