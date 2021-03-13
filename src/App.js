import './App.css';
import React, { Component } from 'react'
import { evaluate } from 'mathjs';

class App extends Component {
  state = {
    screen: ["0"],
  };

  inputHandle = (val) => {
    let newScreen = [...this.state.screen, val]
    if (newScreen[0] == "0"){
      newScreen.shift()
    }
    this.setState( {screen: newScreen} )
  }

  handleSubmit = () => {
    let evalStr = this.state.screen.join("")
    let output = evaluate(evalStr)
    this.setState({screen: [output] })
  }

  handleClear = () => {
    this.setState({ screen: ["0"]})
  }

  render() {
    return (
      <div>
        <h1>Calculator App</h1>
        <div className="screen">
          <h2>{this.state.screen}</h2>
        </div>
        
        <div className="buttons">
          <button onClick={this.handleClear}>AC</button>
          <CalcButton number="*" clickFunction={this.inputHandle} />
          <CalcButton number="/" clickFunction={this.inputHandle} />
          <CalcButton number="-" clickFunction={this.inputHandle} />
          <CalcButton number="+" clickFunction={this.inputHandle} />
          <CalcButton number="." clickFunction={this.inputHandle} />
          <CalcButton number="0" clickFunction={this.inputHandle} />
          <CalcButton number="1" clickFunction={this.inputHandle} />
          <CalcButton number="2" clickFunction={this.inputHandle} />
          <CalcButton number="3" clickFunction={this.inputHandle} />
          <CalcButton number="4" clickFunction={this.inputHandle} />
          <CalcButton number="5" clickFunction={this.inputHandle} />
          <CalcButton number="6" clickFunction={this.inputHandle} />
          <CalcButton number="7" clickFunction={this.inputHandle} />
          <CalcButton number="8" clickFunction={this.inputHandle} />
          <CalcButton number="9" clickFunction={this.inputHandle} />

          <button onClick={this.handleSubmit}>=</button>
        </div>
      </div>
    )
}
}

const CalcButton = (props) => {
  return (
    <button onClick={() => props.clickFunction(props.number)}>
      {props.number}
    </button>
  )
} 



export default App;