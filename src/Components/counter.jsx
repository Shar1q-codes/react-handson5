import React, { useState } from 'react'
import Hoc from './Hoc';
const Counter = () => {
    const [count,setCount]=useState(0)
    
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  );
};

const EnhancedCounter = Hoc(Counter)
export default EnhancedCounter