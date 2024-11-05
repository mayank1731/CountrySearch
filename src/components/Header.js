import React from 'react';

const Header = ({ searchTerm, handleSearch, handleButtonClick }) => {
    return (
        <header>
            <h1 className="headercountry">COUNTRY SEARCH APP</h1>
            {searchTerm && (
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button onClick={handleButtonClick}>Show Country Info</button>
                </div>
            )}
        </header>
    );
};

export default Header;
