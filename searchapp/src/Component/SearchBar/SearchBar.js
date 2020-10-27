import React, { useState } from 'react';
import './searchBar.css'
function SearchBar()
{


    const[input,setInput]=useState('');
    let nba=[
        {name:'vaibhavee', team:'xyz'},
        {name:'gajanan', team:'xyz'}, 
        {name:'m', team:'xyz'}, 
        {name:'john', team:'xyz'}

]
const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value);

}
if(nba.length>0)
{
    nba=nba.filter((i)=>{
        return i.name.match(input);
    })
}
return(
<div className='search-card'>
    <form>
     <div>
             <input type='text' 
             placeholder=' you can find here....?'
                 onChange={handleChange}
                 value={input}
             />
<button type='button' >Search</button>

             </div>
    
    </form>

    <div>
        {nba.map((fname,index)=>{
            return (<div>

                <ul>
                    <li>{fname.name}+{fname.team}</li>
                </ul>
            </div>)
        })}
    </div>
</div>)
}
export default SearchBar; 