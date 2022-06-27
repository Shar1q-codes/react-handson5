import React, { PureComponent } from 'react'

export default class Comppure extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            name : 'Shariq',
            

        };
    }

    handleUpdate = ()=>{
        this.setState({ name: this.state.name })
    }
  render() {
    console.log("Pure Component Updated ");
    return (
      <div className='pure'>
        <h1>Pure Component</h1>
        <ul>
            <li>A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.</li>
            <li>PureComponent Is Primarily Used for Performance Optimization. As outlined in the React docs: If your React component's render() function renders the same result given the same props and state, you can use React. PureComponent for a performance boost in some cases.</li>
        </ul>

        <h2>Pure Compnent Example</h2>
        <p>Name : {this.state.name} </p>
        <button onClick={this.handleUpdate}>Update</button>
        <p>Check console for re-rendering</p>
      </div>
    )
  }
}
