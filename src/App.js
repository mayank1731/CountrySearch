import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';
import Favorites from './components/Favorites'; 
import axios from 'axios';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
                setFilteredCountries(response.data);
            } catch (error) {
                console.error('Error fetching the countries', error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        if (location.state && location.state.searchTerm) {
            setSearchTerm(location.state.searchTerm);
            handleSearch({ target: { value: location.state.searchTerm } });
        }
    }, [location.state]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    const handleButtonClick = () => {
        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filtered.length > 0) {
            navigate(`/country/${filtered[0].name.common}`, { state: { searchTerm } });
        } else {
            alert("Country not found");
        }
    };

    const toggleFavorite = (countryName) => {
        if (favorites.includes(countryName)) {
            setFavorites(favorites.filter(fav => fav !== countryName));
        } else if (favorites.length < 5) { // Limit to 5 favorites
            setFavorites([...favorites, countryName]);
        } else {
            alert("You can only have up to 5 favorites.");
        }
    };

    return (
        <div>
            <Header favorites={favorites} />
            <div className="main-content">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyPress={(e) => e.key === 'Enter' && handleButtonClick()}
                />
                <button onClick={handleButtonClick}>SEARCH COUNTRY</button>
                
                {favorites.length > 0 && ( // Conditional rendering for favorites section
                    <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
                )}

                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="cards-container">
                                {filteredCountries.map((country, index) => (
                                    <CountryCard
                                        key={index}
                                        country={country}
                                        toggleFavorite={toggleFavorite}
                                        isFavorite={favorites.includes(country.name.common)}
                                    />
                                ))}
                            </div>
                        }
                    />
                    <Route
                        path="/country/:name"
                        element={
                            <CountryDetails
                                countries={countries}
                                toggleFavorite={toggleFavorite}
                                favorites={favorites}
                            />
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
