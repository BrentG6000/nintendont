import { useState } from 'react';
import searchIcon from '../searchIcon.png'
import './css/SearchBar.css';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    //if (searchInput.length > 0) {};

    return  <div id='searchWrapper'>
                <img
                    id='searchIcon'
                    src={searchIcon}
                    alt='search icon'
                />
                <input
                    id='searchBar'
                    type="text"
                    placeholder="Search games, hardware, news, etc"
                    onChange={handleChange}
                    value={searchInput}
                />
            </div>

};

export default SearchBar;
