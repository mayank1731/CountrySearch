import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; 

const CountryDetails = ({ countries, toggleFavorite, favorites }) => {
    const { name } = useParams();
    const country = countries.find(country => country.name.common === name);

    if (!country) {
        return <div>Country not found.</div>;
    }

    const languages = Object.values(country.languages || {}).join(', ');

    return (
        <div className="country-details">
            <div className="details-box">
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} alt={country.name.common} />
                <p><strong>Top Level Domain:</strong> {country.tld.join(', ')}</p>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                <p><strong>Languages:</strong> {languages}</p>
                <button onClick={() => toggleFavorite(country.name.common)}>
                    <FaStar color={favorites.includes(country.name.common) ? 'gold' : 'gray'} />
                </button>
                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export default CountryDetails;
