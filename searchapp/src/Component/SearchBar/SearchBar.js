import React from 'react';
import './searchBar.css'
function SearchBar()
{
return(

<div className='search-card'>
    <form>
             
             <div>
             <input type='text' id='search-input'/>
<button type='button' id='search-button'>Search</button>

             </div>
    
    </form>
</div>)
}
export default SearchBar; 