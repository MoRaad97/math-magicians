import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="calculator-container">
          <div className="screen"><span className="result">0</span></div>
          <div className="buttons">
            <button type="button" className="normal">AC</button>
            <button type="button" className="normal">+/-</button>
            <button type="button" className="normal">%</button>
            <button type="button" className="normal active"><span>&#247;</span></button>
            <button type="button" className="normal">7</button>
            <button type="button" className="normal">8</button>
            <button type="button" className="normal">9</button>
            <button type="button" className="normal active">x</button>
            <button type="button" className="normal">4</button>
            <button type="button" className="normal">5</button>
            <button type="button" className="normal">6</button>
            <button type="button" className="normal active">-</button>
            <button type="button" className="normal">1</button>
            <button type="button" className="normal">2</button>
            <button type="button" className="normal">3</button>
            <button type="button" className="normal active">+</button>
            <button type="button" className="zero">0</button>
            <button type="button" className="normal">.</button>
            <button type="button" className="normal active">=</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
