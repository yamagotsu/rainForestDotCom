import React from 'react';
import './Searchbar.css';

function Searchbar({placeholder, data}){
    return (
        <div className ='search'>
            <div className='searchInputs'><input type='text' placeholder={placeholder} />                     
            <button class="btn btn-success m-2 btn-sm">Enter</button>
            </div>
            <div className='dataResults'>
            </div>

            </div>

        
    )
}

export default Searchbar;