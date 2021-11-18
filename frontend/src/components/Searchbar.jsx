import React from 'react';
import './Searchbar.css';

function Searchbar({placeholder, data}){
    return (
        <div className ='search'>
            <div className='searchInputs'><input type='text' placeholder={placeholder} />                     
            <div className= 'searchIcon'>                                                
            </div>
            <button class="btn btn-success">Enter</button>
            </div>
            <div className='dataResults'>
            {/* {data.map((item, key)=>{
                return <div>{item.name} </div>; */}
            {/* })}; */}
           
                

            </div>

            </div>

        
    )
}

export default Searchbar;