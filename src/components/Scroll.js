import React from 'react';


const Scroll=(props)=>{
    return (
        <div style={{border:'2px solid black',overflowY:'scroll',height:'800px',padding:'5px 5px'}}>
        {props.children}
        </div>
        );
        
} 

export default Scroll;