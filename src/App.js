import './App.css';
import React, { Component } from 'react';
import { evaluate } from 'mathjs';

class App extends Component {
  state = {
    screen: ["0"],
    keys: [
      { value: "AC", styling: "clear" },
      { value: "÷", styling: "operator" },
      { value: "7", styling: "num" },
      { value: "8", styling: "num" },
      { value: "9", styling: "num" },
      { value: "×", styling: "operator" },
      { value: "4", styling: "num" },
      { value: "5", styling: "num" },
      { value: "6", styling: "num" },
      { value: "-", styling: "operator" },
      { value: "1", styling: "num" },
      { value: "2", styling: "num" },
      { value: "3", styling: "num" },
      { value: "+", styling: "operator" },
      { value: "0", styling: "zero" },
      { value: ".", styling: "num" },
      { value: "=", styling: "operator" },
    ],
  };

  inputHandle = (val) => {
    if (val === "AC") {
      this.setState({ screen: ["0"] });
    }
    else if (val === "=") {
      let evalStr = this.state.screen.join("");
      let output = evaluate(evalStr);
      this.setState({ screen: [output] });
    }
    else {
      let newScreen = [...this.state.screen, val];
      if (newScreen[0] === "0"){
        newScreen.shift();
      }
      this.setState({ screen: [newScreen] });
    }
  };

  render() {
    return (
      <div>
        <h1>Calculator App</h1>
        <div className="calculator">
          <div className="screen">
            <h2>{this.state.screen}</h2>
          </div>
          
          <div className="buttons">
            {
              this.state.keys.map( key => {
                return (
                <CalcButton 
                  number={key.value} 
                  styling={key.styling}
                  clickFunction={this.inputHandle} />
                );
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const CalcButton = (props) => {
  return (
    <button 
      className={`btn ${props.styling}`} 
      onClick={() => props.clickFunction(props.number)}>
      {props.number}
    </button>
  )
} 



export default App;