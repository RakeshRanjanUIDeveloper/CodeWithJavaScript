import React from "react";

export class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Initialize state and bind methods");
  }

  componentDidMount(){
     console.log("componentDidMount: Component added to DOM");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate: Component updated");
    console.log("Current state:", this.state);
  }

  componentWillUnmount(){
     console.log("componentWillUnmount: Component is being removed from DOM");
  }
    increment = () =>{
    this.setState({count : this.state.count +1})
  }
  render() {
    console.log("Render: Returning JSX to display UI");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
