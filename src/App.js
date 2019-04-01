import React, { Component } from 'react';
import './App.css';
import Machine from './machine/Machine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: ["Vibration", "Thermal", "Humidity", "Radiation"],
      parts: ["A1", "B1", "C1", "D1", "E1"],
      orders: ["A1", "C1", "E1", "D1", "C1", "B1", "E1"],
      completedOrders: ["C1", "E1"],
      step: 0
    }
  }

  componentDidMount() {
    this.increaseStep = setInterval(() => {
      // this.incrementStep()
      this.setState({step: this.state.step + 1})
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.increaseStep)
  }



  render() {
    const machines = ["Vibration", "Thermal", "Humidity", "Radiation"]
    return (
      <div className="App">
        <div className="Step">
          <h3>Step: {this.state.step}</h3>
        </div>
        <div className="Queue">
          <h3>Queue</h3>
          {this.state.orders.map((order, index) => {
            return <div className="Order" key={index}>{order}</div>
          })}
        </div>
        <div className="Machine-container">
          {machines.map((machine, index) => {
            return <Machine className="Machine" key={index} type={machine}/>
          })}
        </div>
        <div className="Complete">
          <h3>Complete</h3>
          {this.state.completedOrders.map((order, index) => {
            return <div className="Order" key={index}>{order}</div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
