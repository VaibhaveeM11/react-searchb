import React from 'react';
import './AutoSuggest.css';
class AutoSuggest extends React.Component {
    constructor(props) {
        super(props);
        this.items=['Vaibha','Zenatix','zenatix', 'gurgaon','gurguram'];
        this.state = {  
            suggestions:[],
            text:'',
        };
     }

    onValueChange=(e)=>{
        const value = e.target.value;
        let suggestions=[];
        if(value.length > 0)
        {
           const regex= new RegExp(`^${value}`,'i');
            suggestions= this.items.sort().filter(v=>regex.test(v));
        }
    this.setState(()=>({suggestions,text:value}));
}

    suggestedSelected(value)
    {
     this.setState(()=>({
         text:value,
         suggestions:[],
     }));
    }
    renderSuggest(){
        const {suggestions} = this.state;
        if(suggestions.length === 0)
        {
        return null;
        }
        return(
        <ul>
            {suggestions.map((item)=><li onClick={this.suggestedSelected(item)}>{item}</li>)}
        </ul>   );    
    }

    
    render() { 
        const {text}=this.state;
        return (  
        <div className='autodiv'>
        <input type='text' 
            value={text} 
            placeholder='Search here....'
             onChange={this.onValueChange}/>
           {this.renderSuggest}
        </div>);
    }
}
 
export default AutoSuggest;