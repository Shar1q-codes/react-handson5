import React from 'react'


const Hoc = (Component) => {
    const UpgradedComp = () =>{
  return (
    <div className='hoc'>
        <h1>High Order Component</h1>
        <ul>
            <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</li>
            <li>HOCs are not part of the React API</li>
            <li>They are a pattern that emerges from React's compositional nature.</li>
            <li>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
            <li>The examples of HOCs are Redux's connect and Relay's createContainer.</li>
        </ul>
        <Component 
         />
    </div>
  )

}
return UpgradedComp;
}



export default Hoc