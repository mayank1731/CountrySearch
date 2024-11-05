import React from 'react';


const Favorites = ({ favorites, toggleFavorite }) => {
    return (
        <div className="favorites-page">
           
            {favorites.length > 0 ? (
                <ul className="favorites-list">
                
                </ul>
            ) : (
                <p>No favorite countries added yet.</p>
            )}
        </div>
    );
};

export default Favorites;
