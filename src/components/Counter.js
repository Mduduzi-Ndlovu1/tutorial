import React, { Component } from 'react'

export default class Counter extends Component {
//   use constructer to make states work
constructor(){
    super()
        this.state = {
          counter: 0
        };
        //this.increment = this.increment.bind(this);
      
}
    increment = () =>{
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement (){
        this.setState({ counter: this.state.counter - 1 })
    }
  
    render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter} </h3>

      <button onClick={this.increment}>increment</button>
      
      <button onClick={() => {
        this.decrement()
      }}>decrement</button>
    
        </div>)
  }
};
