
import React, { useState } from 'react';

function M3F () {
 
    const[x, set3x] = useState(3);
    const [z, set7z] = useState(7);
    
    const do3 = () => {
        
        // this.setState((state) => ({x: state.x +=3}));
        const newX = x + 3;
        set3x(newX);
        
    }

    const do7 = () => {
        
       
        set7z(z +7);
        
    }

    return (
     <>
        <button className = "mygtukas" onClick={do3}>
            {x}X
        </button>
        <button className = "mygtukas" onClick={do7}>
            {z}Z
        </button>
      </>

);
    }
  
  export default M3F;


  // ND => karves perdaryti ant hookų, be localStorage