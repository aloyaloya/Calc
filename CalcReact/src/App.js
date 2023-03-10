import "./styles.css"
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      out: 0,
      buffer: 0,
      operation: null,
      fsize: "90px",
      lineheight: '110px'
    }
  }

  handleSlice = (e) => {
    this.setState({
      out: (String(this.state.out).length > 1) ? String(this.state.out).slice(0, -1) : 0
    })
  }

  handleReset = (e) => {
    this.setState({
      out: 0,
      buffer: 0,
      operation: null,
      fsize: "90px",
      lineheight: '110px'
    })
  }

  handleOperation = (e) => {
    this.setState({
      operation: e.target.innerText,
      buffer: this.state.out,
      out: 0
    })
  };

  handleEquals = (e) => {
    let result;

    if(this.state.operation !== null) {
      switch(this.state.operation) {
        case "÷":
          result = this.state.buffer / this.state.out;
          break;
        case "×":
          result = this.state.buffer * this.state.out;
          break;
        case "-":
          result = this.state.buffer - this.state.out;
          break;
        case "+":
          result = this.state.buffer + this.state.out;
          break;
      }

      this.setState({
        out: result,
        buffer: 0,
        operation: null
      })
    }
  }

  handleValue = (e) => {
    this.setState({
      out: this.state.out * 10 + Number(e.target.innerText)
    })
  };

  render() {
    return (
      <div className="container">
        <div className="calc">
          <div className="calc_display">
            <input style={{fontSize: this.state.fsize, lineHeight: this.state.lineheight}} 
            className = "calc_display_input" type ="number" value={this.state.out} onChange={(e) => this.setState({
              out: (String(e.target.value).length > 0) ? e.target.value : 0
            })}/>
          </div>
  
          <div className="calc_buttons">
            <div className="buttons-row">
              <button onClick={this.handleReset} className="two-span reset">C</button>
              <button onClick={this.handleSlice}className="operation">←</button>
              <button onClick={this.handleOperation}className="operation">÷</button>
            </div>
            <div className="buttons-row">
              <button onClick={this.handleValue}className="number">7</button>
              <button onClick={this.handleValue}className="number">8</button>
              <button onClick={this.handleValue}className="number">9</button>
              <button onClick={this.handleOperation}className="operation">×</button>
            </div>
            <div className="buttons-row">
              <button onClick={this.handleValue}className="number">4</button>
              <button onClick={this.handleValue}className="number">5</button>
              <button onClick={this.handleValue}className="number">6</button>
              <button onClick={this.handleOperation}className="operation">-</button>
            </div>
            <div className="buttons-row">
              <button onClick={this.handleValue}className="number">1</button>
              <button onClick={this.handleValue}className="number">2</button>
              <button onClick={this.handleValue}className="number">3</button>
              <button onClick={this.handleOperation}className="operation">+</button>
            </div>
            <div className="buttons-row">
              <button onClick={this.handleValue}className="three-span number">0</button>
              <button onClick={this.handleEquals}className="equals">=</button> 
            </div>
          </div>
  
        </div>
      </div>
    )
  }
}

export default App;
