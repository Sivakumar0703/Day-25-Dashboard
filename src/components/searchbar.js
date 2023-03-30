 import 'bootstrap/dist/css/bootstrap.min.css';
 import React from 'react';



function SearchBar() {

    return(
       
        <div className='searchbar'> 
          
            <div>
            <input placeholder='Search for ...' className='search'>
            
            </input>

            <i className="bi bi-search search-icon"></i>
            </div>

            <div  className="srch-i">
            <i className="bi bi-bell-fill" style={{marginRight:'10px'}}></i>
            <i className="bi bi-envelope-fill"></i>
            <i className="bi bi-person-circle"  style={{marginLeft:'50px'}}></i>
            </div>

        </div>
        
    );
}


export default SearchBar  