import React from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.result = this.result.bind(this);
  }

  result(e) {
    const { obj } = this.state;
    const newObj = calculate(obj, e.target.textContent);
    this.setState({ obj: newObj });
  }

  render() {
    const { obj } = this.state;
    return (
      <>
        <div className="calculator-container">
          <div className="screen"><span className="result">{obj.next || obj.total || 0}</span></div>
          <div className="buttons">
            <button type="button" className="normal" onClick={this.result}>AC</button>
            <button type="button" className="normal" onClick={this.result}>+/-</button>
            <button type="button" className="normal" onClick={this.result}>%</button>
            <button type="button" className="normal active" onClick={this.result}>÷</button>
            <button type="button" className="normal" onClick={this.result}>7</button>
            <button type="button" className="normal" onClick={this.result}>8</button>
            <button type="button" className="normal" onClick={this.result}>9</button>
            <button type="button" className="normal active" onClick={this.result}>x</button>
            <button type="button" className="normal" onClick={this.result}>4</button>
            <button type="button" className="normal" onClick={this.result}>5</button>
            <button type="button" className="normal" onClick={this.result}>6</button>
            <button type="button" className="normal active" onClick={this.result}>-</button>
            <button type="button" className="normal" onClick={this.result}>1</button>
            <button type="button" className="normal" onClick={this.result}>2</button>
            <button type="button" className="normal" onClick={this.result}>3</button>
            <button type="button" className="normal active" onClick={this.result}>+</button>
            <button type="button" className="zero" onClick={this.result}>0</button>
            <button type="button" className="normal" onClick={this.result}>.</button>
            <button type="button" className="normal active" onClick={this.result}>=</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
