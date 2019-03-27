import React, { Component } from 'react';
import Counters from './components/counters.js';
import Navbar from './components/navbar';


import './App.css';

class App extends Component {

  state = {
    counters :
    [
      {id:0 , value:3},
      {id:1 , value:0},
      {id:2 , value:0},
      {id:3 , value:4}
    ]
  }

  incrementHandler =(id)=>{
    // console.log("was clicked")
    const index = this.state.counters.findIndex(p=>{
      return p.id == id
    });
    const counters = [...this.state.counters];
    let counter  = {...counters[index]}
    counter.value+=1;
    counters[index] = counter;
    this.setState({counters:counters})


  }

  decrementHandler=(id)=>{
    const index = this.state.counters.findIndex(p=>{
      return p.id == id
    });
    const counters = [...this.state.counters];
    let counter  = {...counters[index]}
    counter.value-=1;
    counters[index] = counter;
    this.setState({counters:counters})
    console.log('was clicked');



  }

  deleteHandler=(id)=>{
    const index = this.state.counters.findIndex(p=>{
      return p.id == id
    });
    const counters = [...this.state.counters];
    counters.splice(index,1);
    this.setState({counters:counters});

  }

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <main className = "container">
          <Counters
          count = {this.state.counters}
          onIncrement = {this.incrementHandler}
          onDecrement = {this.decrementHandler}
          onDelete = {this.deleteHandler}/>
        </main>


      </React.Fragment>
    );
  }
}

export default App;
