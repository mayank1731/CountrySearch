import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; 

const CountryCard = ({ country, toggleFavorite, isFavorite }) => {
    return (
        <div className="country-card">
            <Link to={`/country/${country.name.common}`}>
                <img src={country.flags.png} alt={`${country.name.common} flag`} />
                <h3>{country.name.common}</h3>
            </Link>
            <button onClick={() => toggleFavorite(country.name.common)}>
                <FaStar color={isFavorite ? 'gold' : 'gray'} />
            </button>
        </div>
    );
};

export default CountryCard;
