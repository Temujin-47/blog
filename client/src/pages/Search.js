import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";

function Search() {
    return (
        <div className='search dark light'>
            <div className='search_title'>
                <h1> Search</h1>


            </div>

            <div className='search_item'>
                <input className='searchInput' type='text' placeholder='Search Something..' size="40" />

                <SearchIcon className='search_Icon' fontSize="large" />


            </div>

        </div>

    )
}

export default Search